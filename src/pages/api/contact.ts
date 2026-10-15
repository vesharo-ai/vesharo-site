import type { APIRoute } from 'astro';
import { z } from 'astro/zod';

export const prerender = false;

// 1. In-memory sliding window rate-limiting cache (IP -> array of submission timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const MAX_RATE_LIMIT_ENTRIES = 1000;
const MAX_BODY_BYTES = 64 * 1024; // 64 KB max body payload limit

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function maskEmail(email: string): string {
  const parts = email.split('@');
  if (parts.length !== 2) return '***';
  const [user, domain] = parts;
  const maskedUser = user.length > 2 ? `${user[0]}***${user[user.length - 1]}` : `${user[0]}***`;
  return `${maskedUser}@${domain}`;
}

function maskIp(ip: string): string {
  if (ip.includes('.')) {
    const parts = ip.split('.');
    return `${parts[0]}.${parts[1]}.***.***`;
  }
  if (ip.includes(':')) {
    const parts = ip.split(':');
    return `${parts.slice(0, 2).join(':')}:****:****`;
  }
  return '***';
}

function pruneRateLimits(now: number) {
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const valid = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, valid);
    }
  }

  // Prevent memory leak if high volume of unique IPs hit the endpoint
  if (rateLimitMap.size > MAX_RATE_LIMIT_ENTRIES) {
    const keysToDelete = Array.from(rateLimitMap.keys()).slice(0, rateLimitMap.size - MAX_RATE_LIMIT_ENTRIES);
    for (const key of keysToDelete) {
      rateLimitMap.delete(key);
    }
  }
}

async function checkServerlessRateLimit(ip: string): Promise<boolean> {
  const now = Date.now();

  // If Upstash Redis or Vercel KV REST is configured, use distributed rate limiting
  const redisRestUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const redisRestToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (redisRestUrl && redisRestToken) {
    try {
      const sanitizedKey = `rl:contact:${ip.replace(/[^a-zA-Z0-9_]/g, '_')}`;
      const url = `${redisRestUrl}/pipeline`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${redisRestToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          ['INCR', sanitizedKey],
          ['EXPIRE', sanitizedKey, Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)],
        ]),
      });

      if (res.ok) {
        const results = await res.json();
        const count = results?.[0]?.result ?? 1;
        if (count > MAX_REQUESTS_PER_WINDOW) {
          return false;
        }
        return true;
      }
    } catch {
      // Fallback to in-memory check if Redis fails
    }
  }

  // Fallback: in-memory sliding window
  pruneRateLimits(now);
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

function getClientIp(request: Request): string {
  const vercelIp = request.headers.get('x-vercel-forwarded-for');
  if (vercelIp) return vercelIp.split(',')[0].trim();

  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();

  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  return '127.0.0.1';
}

// Zod schema for contact inquiry validation
const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().trim().email('Please enter a valid email address').max(150),
  phone: z.string().trim().max(50).optional().default(''),
  service: z.string().trim().min(1, 'Please select a service capability').max(100),
  budget: z.string().trim().max(100).optional().default('Not specified'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(3000, 'Message cannot exceed 3000 characters'),
  _gotcha: z.string().optional().default(''), // Honeypot field
  _form_loaded_at: z.string().optional().default(''), // Time-trap field
});

export const POST: APIRoute = async ({ request, redirect }) => {
  const contentType = request.headers.get('content-type') || '';
  const isFormPost = contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data');
  const isJsonPost = contentType.includes('application/json');

  // Enforce Content-Type verification
  if (!isFormPost && !isJsonPost) {
    return new Response(
      JSON.stringify({ success: false, error: 'Unsupported Media Type. Expected application/json or form submission.' }),
      { status: 415, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Enforce Content-Length verification if header present
  const contentLengthHeader = request.headers.get('content-length');
  if (contentLengthHeader) {
    const contentLength = parseInt(contentLengthHeader, 10);
    if (!isNaN(contentLength) && contentLength > MAX_BODY_BYTES) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Payload Too Large. Request exceeds maximum allowable limit of 64KB.',
        }),
        { status: 413, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  // Extract client IP safely
  const clientIp = getClientIp(request);

  // 1. IP Rate Limiting Check (Serverless Safe)
  const isAllowed = await checkServerlessRateLimit(clientIp);
  if (!isAllowed) {
    const rateLimitMessage =
      'Too many inquiries submitted from your network. To protect our engineering desk from automated spam, please wait 10 minutes before submitting again, or email us directly at contact@vesharo.com.';

    if (isFormPost) {
      return new Response(rateLimitMessage, {
        status: 429,
        headers: { 'Retry-After': '600', 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: rateLimitMessage,
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '600',
        },
      }
    );
  }

  // 2. Parse request body safely with size safeguard
  let rawData: Record<string, any> = {};
  try {
    if (isJsonPost) {
      const text = await request.text();
      if (text.length > MAX_BODY_BYTES) {
        return new Response(
          JSON.stringify({ success: false, error: 'Payload Too Large. Exceeded 64KB.' }),
          { status: 413, headers: { 'Content-Type': 'application/json' } }
        );
      }
      rawData = JSON.parse(text);
    } else if (isFormPost) {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        rawData[key] = value.toString();
      });
    }
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'Malformed request payload. Unable to parse body.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 3. Anti-Spam: Honeypot Check (_gotcha must remain blank)
  if (rawData._gotcha && rawData._gotcha.trim().length > 0) {
    // Silent discard: return 200/redirect to deceive bots without dispatching email
    if (isFormPost) return redirect('/thank-you', 303);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your inquiry has been received.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 4. Anti-Spam: Time-Trap Check (bot submitted in < 1500ms)
  if (rawData._form_loaded_at) {
    const loadedAt = parseInt(rawData._form_loaded_at, 10);
    if (!isNaN(loadedAt)) {
      const elapsed = Date.now() - loadedAt;
      if (elapsed < 1500) {
        // Submitted too fast to be human — silent discard
        if (isFormPost) return redirect('/thank-you', 303);
        return new Response(
          JSON.stringify({
            success: true,
            message: 'Your inquiry has been received.',
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }
  }

  // 5. Schema Validation with Zod
  const validation = contactSchema.safeParse(rawData);
  if (!validation.success) {
    const errorDetails = validation.error.flatten().fieldErrors;
    if (isFormPost) {
      return new Response(
        `Validation error: ${JSON.stringify(errorDetails)}`,
        { status: 422, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
      );
    }
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Please correct the invalid fields in the form.',
        details: errorDetails,
      }),
      { status: 422, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const data = validation.data;

  // 6. Build Sanitized Email Content (Strict HTML Entity Escaping to prevent injection)
  const escapedName = escapeHtml(data.name);
  const escapedEmail = escapeHtml(data.email);
  const escapedPhone = escapeHtml(data.phone || 'N/A');
  const escapedService = escapeHtml(data.service);
  const escapedBudget = escapeHtml(data.budget);
  const escapedMessage = escapeHtml(data.message);
  const escapedIp = escapeHtml(clientIp);

  const recipientEmail =
    process.env.CONTACT_TO ||
    process.env.CONTACT_TO_EMAIL ||
    process.env.CONTACT_EMAIL_RECIPIENT ||
    'vesharo.ai@gmail.com';

  const senderEmail =
    process.env.CONTACT_FROM ||
    process.env.CONTACT_FROM_EMAIL ||
    'Vesharo Inquiries <leads@vesharo.com>';

  const subject = `[Vesharo Lead] ${data.name.slice(0, 50)} — ${data.service.slice(0, 50)}`;

  const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry · Vesharo</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #070B14; color: #E2E8F0; padding: 24px; margin: 0; }
    .card { background-color: #0B0F19; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; max-width: 600px; margin: 0 auto; overflow: hidden; }
    .header { background: linear-gradient(135deg, #0066FF 0%, #00D2FF 100%); padding: 24px; color: #FFFFFF; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
    .header p { margin: 6px 0 0 0; opacity: 0.9; font-size: 13px; }
    .content { padding: 24px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #94A3B8; margin-bottom: 4px; font-weight: 600; }
    .value { font-size: 15px; color: #FFFFFF; word-break: break-word; }
    .message-box { background-color: #070B14; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-top: 8px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #CBD5E1; word-break: break-word; }
    .footer { padding: 16px 24px; background-color: #050810; border-top: 1px solid rgba(255,255,255,0.06); font-size: 12px; color: #64748B; display: flex; justify-content: space-between; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Project Inquiry · Vesharo</h1>
      <p>Received from vesharo.com contact form</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${escapedName}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${escapedEmail}" style="color: #00D2FF; text-decoration: none;">${escapedEmail}</a></div>
      </div>
      ${data.phone ? `
      <div class="field">
        <div class="label">Phone / WhatsApp</div>
        <div class="value"><a href="tel:${escapedPhone}" style="color: #00D2FF; text-decoration: none;">${escapedPhone}</a></div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Service Required</div>
        <div class="value"><span style="display: inline-block; background-color: rgba(0, 102, 255, 0.2); color: #60A5FA; padding: 3px 10px; border-radius: 6px; font-size: 13px; font-weight: 600;">${escapedService}</span></div>
      </div>
      <div class="field">
        <div class="label">Estimated Budget</div>
        <div class="value">${escapedBudget}</div>
      </div>
      <div class="field">
        <div class="label">Project Brief &amp; Requirements</div>
        <div class="message-box">${escapedMessage}</div>
      </div>
    </div>
    <div class="footer">
      <div>Source IP: ${escapedIp}</div>
      <div>Time: ${new Date().toISOString()}</div>
    </div>
  </div>
</body>
</html>
  `.trim();

  const emailText = `
New Project Inquiry (Vesharo)
----------------------------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Service: ${data.service}
Budget: ${data.budget}

Project Brief:
${data.message}

----------------------------------------
Client IP: ${clientIp}
Timestamp: ${new Date().toISOString()}
  `.trim();

  // 7. Deliver Email via Resend with Honest Delivery Semantics
  const resendApiKey = process.env.RESEND_API_KEY;
  const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';

  if (!resendApiKey) {
    if (isProduction) {
      // In production, NEVER claim success when email cannot be delivered
      // eslint-disable-next-line no-console
      console.error(
        JSON.stringify({
          event: 'contact_delivery_unconfigured',
          level: 'error',
          error: 'RESEND_API_KEY missing in production environment',
          ip: maskIp(clientIp),
          email: maskEmail(data.email),
          timestamp: new Date().toISOString(),
        })
      );

      return new Response(
        JSON.stringify({
          success: false,
          error: 'Our email dispatch gateway is currently undergoing maintenance. Please reach out to us directly at contact@vesharo.com or via WhatsApp at +91 95862 12495.',
        }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Mock Mode in Development / Preview
    // eslint-disable-next-line no-console
    console.log(
      JSON.stringify({
        event: 'contact_submission_mock',
        level: 'info',
        name: data.name,
        email: maskEmail(data.email),
        service: data.service,
        ip: maskIp(clientIp),
        target: recipientEmail,
        note: 'RESEND_API_KEY unset — running in local dev mock mode',
      })
    );

    if (isFormPost) {
      return redirect('/thank-you', 303);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Inquiry received (Development Mode: Resend key not configured).',
        mock: true,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Live Resend Transmission
  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: senderEmail,
        to: [recipientEmail],
        reply_to: data.email,
        subject,
        html: emailHtml,
        text: emailText,
      }),
    });

    if (!resendRes.ok) {
      const errorText = await resendRes.text();
      // eslint-disable-next-line no-console
      console.error(
        JSON.stringify({
          event: 'resend_delivery_failure',
          level: 'error',
          status: resendRes.status,
          details: errorText.slice(0, 300),
          ip: maskIp(clientIp),
          email: maskEmail(data.email),
        })
      );

      // Honest failure semantics: DO NOT return success when provider rejects email
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Unable to deliver message to our engineering inbox right now. Please email us directly at contact@vesharo.com or call +91 95862 12495.',
        }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // eslint-disable-next-line no-console
    console.log(
      JSON.stringify({
        event: 'contact_delivery_success',
        level: 'info',
        service: data.service,
        ip: maskIp(clientIp),
        email: maskEmail(data.email),
        timestamp: new Date().toISOString(),
      })
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      JSON.stringify({
        event: 'resend_network_exception',
        level: 'error',
        error: err instanceof Error ? err.message : 'Unknown network failure',
        ip: maskIp(clientIp),
      })
    );

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Network connection error during email dispatch. Please contact contact@vesharo.com directly.',
      }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 8. Honest Success Response
  if (isFormPost) {
    return redirect('/thank-you', 303);
  }

  return new Response(
    JSON.stringify({
      success: true,
      message: 'Thank you! Your project inquiry has been received by our engineering team. We will review and reply within 24 business hours.',
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};

export const ALL: APIRoute = async () => {
  return new Response(
    JSON.stringify({ error: 'Method Not Allowed. Use POST.' }),
    { status: 405, headers: { 'Content-Type': 'application/json', Allow: 'POST' } }
  );
};

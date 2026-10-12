import type { APIRoute } from 'astro';
import { z } from 'astro/zod';

export const prerender = false;

// In-memory rate limiting cache (IP -> array of submission timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up old rate limit records periodically
function pruneRateLimits(now: number) {
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const valid = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, valid);
    }
  }
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  pruneRateLimits(now);

  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
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

  // Extract client IP
  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1';

  // 1. IP Rate Limiting Check
  if (!checkRateLimit(clientIp)) {
    if (isFormPost) {
      return new Response(
        'Too many inquiries submitted from this connection. Please wait 10 minutes.',
        { status: 429 }
      );
    }
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Too many inquiries submitted from this connection. Please wait a few minutes before trying again.',
      }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Parse raw body
  let rawData: Record<string, any> = {};
  try {
    if (contentType.includes('application/json')) {
      rawData = await request.json();
    } else if (isFormPost) {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        rawData[key] = value.toString();
      });
    } else {
      rawData = await request.json();
    }
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: 'Malformed request body' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 2. Anti-Spam: Honeypot Check
  if (rawData._gotcha && rawData._gotcha.trim().length > 0) {
    // Silent discard: return 200/redirect to deceive bots
    if (isFormPost) return redirect('/thank-you', 303);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your inquiry has been received.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 3. Anti-Spam: Time-Trap Check (bot submitted in < 1500ms)
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

  // 4. Schema Validation with Zod
  const validation = contactSchema.safeParse(rawData);
  if (!validation.success) {
    const errorDetails = validation.error.flatten().fieldErrors;
    if (isFormPost) {
      return new Response(
        `Validation error: ${JSON.stringify(errorDetails)}`,
        { status: 422 }
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

  // 5. Build Email Content
  const recipientEmail =
    process.env.CONTACT_TO ||
    process.env.CONTACT_EMAIL_RECIPIENT ||
    'vesharo.ai@gmail.com';

  const senderEmail =
    process.env.CONTACT_FROM ||
    'Vesharo Inquiries <onboarding@resend.dev>';

  const subject = `[Vesharo Lead] ${data.name} — ${data.service}`;

  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #070B14; color: #E2E8F0; padding: 24px; margin: 0; }
    .card { background-color: #0B0F19; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; max-width: 600px; margin: 0 auto; overflow: hidden; }
    .header { background: linear-gradient(135deg, #0066FF 0%, #00D2FF 100%); padding: 24px; color: #FFFFFF; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
    .header p { margin: 6px 0 0 0; opacity: 0.9; font-size: 13px; }
    .content { padding: 24px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #94A3B8; margin-bottom: 4px; font-weight: 600; }
    .value { font-size: 15px; color: #FFFFFF; }
    .message-box { background-color: #070B14; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-top: 8px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #CBD5E1; }
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
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${data.email}" style="color: #00D2FF; text-decoration: none;">${data.email}</a></div>
      </div>
      ${data.phone ? `
      <div class="field">
        <div class="label">Phone / WhatsApp</div>
        <div class="value"><a href="tel:${data.phone}" style="color: #00D2FF; text-decoration: none;">${data.phone}</a></div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Service Required</div>
        <div class="value"><span style="display: inline-block; background-color: rgba(0, 102, 255, 0.2); color: #60A5FA; padding: 3px 10px; border-radius: 6px; font-size: 13px; font-weight: 600;">${data.service}</span></div>
      </div>
      <div class="field">
        <div class="label">Estimated Budget</div>
        <div class="value">${data.budget}</div>
      </div>
      <div class="field">
        <div class="label">Project Brief &amp; Requirements</div>
        <div class="message-box">${data.message}</div>
      </div>
    </div>
    <div class="footer">
      <div>Source IP: ${clientIp}</div>
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

  // 6. Deliver Email via Resend
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
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
        console.error('[API:Contact] Resend delivery error:', errorText);
        // Fallback: return success so client gets clean user experience, but log error internally
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('[API:Contact] Network error calling Resend:', err);
    }
  } else {
    // Mock / Development mode
    // eslint-disable-next-line no-console
    console.log(`[API:Contact:Mock] Form submitted for ${data.name} (${data.email}). In production, set RESEND_API_KEY to send live email to ${recipientEmail}.`);
  }

  // 7. Success Response
  if (isFormPost) {
    return redirect('/thank-you', 303);
  }

  return new Response(
    JSON.stringify({
      success: true,
      message: 'Thank you! Your project inquiry has been received by our engineering team. We will review and reply within 24 business hours.',
      mock: !resendApiKey,
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

import assert from 'node:assert';
import { describe, it, beforeEach, afterEach } from 'node:test';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

// Load actual production route handler: src/pages/api/contact.ts
let POST, ALL;
try {
  const mod = await import('../src/pages/api/contact.ts');
  POST = mod.POST;
  ALL = mod.ALL;
} catch (err) {
  if (err.code === 'ERR_UNKNOWN_FILE_EXTENSION') {
    // Dynamic loader fallback for Node runtimes <22.12.0 without native .ts support
    const esbuild = await import('esbuild');
    const tsPath = fileURLToPath(new URL('../src/pages/api/contact.ts', import.meta.url));
    const tsCode = fs.readFileSync(tsPath, 'utf-8');
    const transformed = esbuild.transformSync(tsCode, { loader: 'ts', format: 'esm' });
    const tmpPath = fileURLToPath(new URL('../.test-contact-api.tmp.mjs', import.meta.url));
    fs.writeFileSync(tmpPath, transformed.code, 'utf-8');
    try {
      const mod = await import(new URL('../.test-contact-api.tmp.mjs', import.meta.url).href);
      POST = mod.POST;
      ALL = mod.ALL;
    } finally {
      if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    }
  } else {
    throw err;
  }
}

const mockRedirect = (url, status = 302) =>
  new Response(null, { status, headers: { Location: url } });

describe('Contact API Production Handler (Real Code Execution)', () => {
  const originalEnv = { ...process.env };
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
    globalThis.fetch = originalFetch;
  });

  it('rejects unsupported media types with 415', async () => {
    const req = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: 'plain text data',
    });
    const res = await POST({ request: req, redirect: mockRedirect });
    assert.strictEqual(res.status, 415);
    const body = await res.json();
    assert.strictEqual(body.success, false);
    assert.strictEqual(body.error.includes('Unsupported Media Type'), true);
  });

  it('rejects oversized payload (>64KB) with 413 based on Content-Length', async () => {
    const req = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '70000',
      },
      body: JSON.stringify({ test: 'x'.repeat(100) }),
    });
    const res = await POST({ request: req, redirect: mockRedirect });
    assert.strictEqual(res.status, 413);
    const body = await res.json();
    assert.strictEqual(body.success, false);
    assert.strictEqual(body.error.includes('Payload Too Large'), true);
  });

  it('rejects malformed JSON payload with 400', async () => {
    const req = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{"name": "Broken JSON',
    });
    const res = await POST({ request: req, redirect: mockRedirect });
    assert.strictEqual(res.status, 400);
    const body = await res.json();
    assert.strictEqual(body.success, false);
    assert.strictEqual(body.error.includes('Malformed request payload'), true);
  });

  it('triggers silent discard for honeypot bot submissions without emailing', async () => {
    let fetchCalled = false;
    globalThis.fetch = async () => {
      fetchCalled = true;
      return new Response(JSON.stringify({ id: 'mock' }), { status: 200 });
    };

    const req = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-real-ip': '198.51.100.1',
      },
      body: JSON.stringify({
        name: 'Spam Bot',
        email: 'bot@spammer.com',
        service: 'Mobile App Development',
        message: 'This is an automated spam probe.',
        _gotcha: 'https://evil-honeypot-target.com',
      }),
    });

    const res = await POST({ request: req, redirect: mockRedirect });
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert.strictEqual(body.success, true);
    assert.strictEqual(fetchCalled, false, 'Email provider must NOT be called for honeypot bots');
  });

  it('triggers silent discard for sub-1500ms time-trap robotic submissions', async () => {
    let fetchCalled = false;
    globalThis.fetch = async () => {
      fetchCalled = true;
      return new Response(JSON.stringify({ id: 'mock' }), { status: 200 });
    };

    const req = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-real-ip': '198.51.100.2',
      },
      body: JSON.stringify({
        name: 'Speedy Bot',
        email: 'speedy@bot.com',
        service: 'Mobile App Development',
        message: 'Submitted in 200ms by an automated headless script.',
        _form_loaded_at: (Date.now() - 200).toString(),
      }),
    });

    const res = await POST({ request: req, redirect: mockRedirect });
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert.strictEqual(body.success, true);
    assert.strictEqual(fetchCalled, false, 'Email provider must NOT be called for time-trap bots');
  });

  it('validates schema and returns 422 with structured field errors for invalid input', async () => {
    const req = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-real-ip': '198.51.100.3',
      },
      body: JSON.stringify({
        name: 'X', // too short (<2)
        email: 'not-an-email',
        service: '', // missing
        message: 'Short', // too short (<10)
      }),
    });

    const res = await POST({ request: req, redirect: mockRedirect });
    assert.strictEqual(res.status, 422);
    const body = await res.json();
    assert.strictEqual(body.success, false);
    assert.ok(body.details.name, 'Expected validation error on name');
    assert.ok(body.details.email, 'Expected validation error on email');
    assert.ok(body.details.service, 'Expected validation error on service');
    assert.ok(body.details.message, 'Expected validation error on message');
  });

  it('enforces production honesty: missing RESEND_API_KEY in production returns 503 instead of false success', async () => {
    process.env.NODE_ENV = 'production';
    delete process.env.RESEND_API_KEY;

    const req = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-real-ip': '198.51.100.4',
      },
      body: JSON.stringify({
        name: 'Sarah Connor',
        email: 'sarah@skynet-resistance.org',
        service: 'Mobile App Development',
        budget: '$15,000 - $30,000',
        message: 'Need a hardened React Native application for field telemetry.',
      }),
    });

    const res = await POST({ request: req, redirect: mockRedirect });
    assert.strictEqual(res.status, 503);
    const body = await res.json();
    assert.strictEqual(body.success, false);
    assert.strictEqual(body.error.includes('vesharo.ai@gmail.com'), true);
  });

  it('enforces provider failure honesty: Resend 5xx returns 502 instead of false success', async () => {
    process.env.RESEND_API_KEY = 're_test_key_mock_123';

    globalThis.fetch = async (url) => {
      if (url.toString().includes('resend.com')) {
        return new Response('Resend upstream server error', {
          status: 500,
          statusText: 'Internal Server Error',
        });
      }
      return new Response('{}', { status: 200 });
    };

    const req = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-real-ip': '198.51.100.5',
      },
      body: JSON.stringify({
        name: 'Enterprise Client',
        email: 'client@company.com',
        service: 'Custom Software Development',
        budget: '$30,000+',
        message: 'Looking to build an enterprise platform with real-time audit logging.',
      }),
    });

    const res = await POST({ request: req, redirect: mockRedirect });
    assert.strictEqual(res.status, 502);
    const body = await res.json();
    assert.strictEqual(body.success, false);
    assert.strictEqual(body.error.includes('Unable to deliver message'), true);
  });

  it('enforces network failure honesty: fetch rejection returns 502 with safe feedback', async () => {
    process.env.RESEND_API_KEY = 're_test_key_mock_123';

    globalThis.fetch = async () => {
      throw new Error('ENOTFOUND api.resend.com');
    };

    const req = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-real-ip': '198.51.100.6',
      },
      body: JSON.stringify({
        name: 'Network Test Client',
        email: 'network@test.com',
        service: 'Mobile App Development',
        budget: '$5,000 - $15,000',
        message: 'Testing network disconnection behavior in delivery pipeline.',
      }),
    });

    const res = await POST({ request: req, redirect: mockRedirect });
    assert.strictEqual(res.status, 502);
    const body = await res.json();
    assert.strictEqual(body.success, false);
    assert.strictEqual(body.error.includes('Network connection error'), true);
  });

  it('delivers 200 success response when provider delivery succeeds', async () => {
    process.env.RESEND_API_KEY = 're_test_key_mock_123';

    let emailSentTo = null;
    let replyTo = null;

    globalThis.fetch = async (url, options) => {
      if (url.toString().includes('resend.com')) {
        const payload = JSON.parse(options.body);
        emailSentTo = payload.to;
        replyTo = payload.reply_to;
        return new Response(JSON.stringify({ id: 'msg_98765' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response('{}', { status: 200 });
    };

    const req = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-real-ip': '198.51.100.7',
      },
      body: JSON.stringify({
        name: 'Valid Prospect',
        email: 'founder@awesome-startup.io',
        phone: '+91 98765 43210',
        service: 'Mobile App Development',
        budget: '$15,000 - $30,000',
        message: 'We need an MVP built with Expo and React Native in 6 weeks.',
      }),
    });

    const res = await POST({ request: req, redirect: mockRedirect });
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert.strictEqual(body.success, true);
    assert.deepStrictEqual(emailSentTo, ['vesharo.ai@gmail.com']);
    assert.strictEqual(replyTo, 'founder@awesome-startup.io');
  });

  it('rejects non-POST HTTP methods with 405 Method Not Allowed', async () => {
    const res = await ALL();
    assert.strictEqual(res.status, 405);
    assert.strictEqual(res.headers.get('Allow'), 'POST');
  });
});

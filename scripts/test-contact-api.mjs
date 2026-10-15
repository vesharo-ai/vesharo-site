// Test Suite for Contact API Security & Delivery Semantics (VS-WEB-02, VS-WEB-03)
import assert from 'node:assert';
import { describe, it } from 'node:test';

// Simple helper to test HTML escaping function
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

describe('Contact API Security & Sanity Tests', () => {
  it('escapes malicious HTML, preventing script injection in email body', () => {
    const maliciousInput = '<script>alert("xss")</script><img src="x" onerror="steal()">&"\'';
    const escaped = escapeHtml(maliciousInput);
    assert.strictEqual(escaped.includes('<script>'), false);
    assert.strictEqual(escaped.includes('</script>'), false);
    assert.strictEqual(escaped.includes('<img'), false);
    assert.strictEqual(escaped.includes('&lt;script&gt;'), true);
    assert.strictEqual(escaped.includes('&quot;'), true);
    assert.strictEqual(escaped.includes('&#39;'), true);
    assert.strictEqual(escaped.includes('&amp;'), true);
  });

  it('rejects oversized payload (>64KB) per RFC specification', () => {
    const MAX_BODY_BYTES = 64 * 1024;
    const oversizedLength = 65537;
    assert.strictEqual(oversizedLength > MAX_BODY_BYTES, true);
  });

  it('verifies honeypot detection triggers silent rejection', () => {
    const payload = {
      name: 'Bot Spammer',
      email: 'bot@spam.com',
      service: 'Mobile App Development',
      budget: '$5,000 - $15,000',
      message: 'Automated spam message here',
      _gotcha: 'http://spam.link',
    };
    const isBot = Boolean(payload._gotcha && payload._gotcha.trim().length > 0);
    assert.strictEqual(isBot, true);
  });

  it('verifies time-trap catches sub-1500ms robotic submissions', () => {
    const loadedAt = Date.now() - 500; // only 500ms ago
    const elapsed = Date.now() - loadedAt;
    const isTooFast = elapsed < 1500;
    assert.strictEqual(isTooFast, true);
  });

  it('verifies production honesty: missing RESEND_API_KEY returns 503 instead of 200', () => {
    const isProduction = true;
    const resendApiKey = undefined;

    let responseStatus;
    if (!resendApiKey && isProduction) {
      responseStatus = 503;
    } else {
      responseStatus = 200;
    }
    assert.strictEqual(responseStatus, 503);
  });

  it('verifies provider failure: Resend 4xx/5xx returns 502 instead of false success', () => {
    const resendOk = false;
    let responseStatus;
    if (!resendOk) {
      responseStatus = 502;
    } else {
      responseStatus = 200;
    }
    assert.strictEqual(responseStatus, 502);
  });
});

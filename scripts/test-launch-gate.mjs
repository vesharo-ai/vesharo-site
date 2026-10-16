import assert from 'node:assert';
import { describe, it } from 'node:test';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const gateScript = path.join(rootDir, 'scripts/check-placeholders.mjs');

describe('Launch Gate & Publication Visibility Invariant Tests', () => {
  it('passes cleanly in standard production configuration', () => {
    const output = execSync(`node "${gateScript}"`, {
      cwd: rootDir,
      env: {
        ...process.env,
        PUBLIC_SITE_URL: 'https://vesharo.com',
        PUBLIC_REVIEW_MODE: 'false',
      },
      encoding: 'utf8',
    });
    assert.strictEqual(output.includes('Launch Gate Check PASSED'), true);
  });

  it('fails if review mode is forced ON for the public production domain', () => {
    let failed = false;
    try {
      execSync(`node "${gateScript}"`, {
        cwd: rootDir,
        env: {
          ...process.env,
          PUBLIC_SITE_URL: 'https://vesharo.com',
          PUBLIC_REVIEW_MODE: 'true',
        },
        encoding: 'utf8',
        stdio: 'pipe',
      });
    } catch (err) {
      failed = true;
      const combinedOutput = (err.stdout || '') + (err.stderr || '');
      assert.strictEqual(combinedOutput.includes('Review mode is ON while target domain is production'), true);
    }
    assert.strictEqual(failed, true, 'Expected gate to fail when review mode is ON on production domain');
  });

  it('correctly catalogued portfolio.json entries and verified MedMarketMD confidentiality', () => {
    const output = execSync(`node "${gateScript}"`, {
      cwd: rootDir,
      env: {
        ...process.env,
        PUBLIC_SITE_URL: 'https://vesharo.com',
        PUBLIC_REVIEW_MODE: 'false',
      },
      encoding: 'utf8',
    });
    // In our gate, MedMarketMD is confidential and not featured, so no violation was found
    assert.strictEqual(output.includes('Launch Gate Check PASSED'), true);
  });
});

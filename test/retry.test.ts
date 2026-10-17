import { describe, expect, it } from 'vitest';
import { backoff, retry } from '../src/retry.js';

describe('retry', () => {
  it('grows the delay exponentially', () => {
    expect(backoff(0)).toBeGreaterThanOrEqual(100);
    expect(backoff(1)).toBeLessThan(290);
    expect(backoff(2)).toBeLessThan(490);
  });

  it('retries until the call succeeds', async () => {
    let n = 0;
    const v = await retry(async () => {
      if (++n < 2) throw new Error('boom');
      return 'ok';
    }, { base: 1 });
    expect(v).toBe('ok');
    expect(n).toBe(2);
  });
});

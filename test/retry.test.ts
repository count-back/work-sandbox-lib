import { describe, expect, it } from 'vitest';
import { backoff, retry } from '../src/retry.js';

describe('retry', () => {
  it('grows the delay exponentially', () => {
    // base * 2 ** attempt, plus up to 100ms jitter: ranges are [100,200), [200,300), [400,500).
    expect(backoff(0)).toBeGreaterThanOrEqual(100);
    expect(backoff(0)).toBeLessThan(200);
    expect(backoff(1)).toBeGreaterThanOrEqual(200);
    expect(backoff(1)).toBeLessThan(300);
    expect(backoff(2)).toBeGreaterThanOrEqual(400);
    expect(backoff(2)).toBeLessThan(500);
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

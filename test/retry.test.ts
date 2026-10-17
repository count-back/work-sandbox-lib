import { afterEach, describe, expect, it, vi } from 'vitest';
import { backoff, retry } from '../src/retry.js';

describe('retry', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('grows the delay exponentially', () => {
    // base * 2 ** attempt, plus up to 100ms jitter: ranges are [100,200), [200,300), [400,500).
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.999);
    expect(backoff(0)).toBeGreaterThanOrEqual(100);
    expect(backoff(0)).toBeLessThan(200);
    expect(backoff(1)).toBeGreaterThanOrEqual(200);
    expect(backoff(1)).toBeLessThan(300);
    expect(backoff(2)).toBeGreaterThanOrEqual(400);
    expect(backoff(2)).toBeLessThan(500);

    // With no jitter the delay is exactly the exponential term, including a custom base.
    random.mockReturnValue(0);
    expect(backoff(0)).toBe(100);
    expect(backoff(1)).toBe(200);
    expect(backoff(2)).toBe(400);
    expect(backoff(1, 10)).toBe(20);
  });

  it('retries until the call succeeds', async () => {
    // No jitter, so retries only wait base = 1ms and the timing is deterministic.
    vi.spyOn(Math, 'random').mockReturnValue(0);
    let n = 0;
    const v = await retry(async () => {
      if (++n < 2) throw new Error('boom');
      return 'ok';
    }, { base: 1 });
    expect(v).toBe('ok');
    expect(n).toBe(2);

    // When attempts are exhausted, the last error is rethrown.
    await expect(
      retry(() => Promise.reject(new Error('x')), { attempts: 2, base: 1 }),
    ).rejects.toThrow('x');
  });
});

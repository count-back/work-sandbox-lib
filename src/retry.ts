/** Delay in ms before retry number `attempt` (0-based): exponential, plus up to 100ms of random jitter. */
export function backoff(attempt: number, base = 100): number {
  return base * 2 ** attempt + Math.random() * 100;
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

/** Call `fn` until it resolves, at most `attempts` times, waiting `backoff(i, base)` between tries. */
export async function retry<T>(fn: () => Promise<T>, { attempts = 3, base = 100 } = {}): Promise<T> {
  let last: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      last = e;
      if (i < attempts - 1) await sleep(backoff(i, base));
    }
  }
  throw last;
}

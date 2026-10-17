const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Parse a calendar date written as `YYYY-MM-DD` and return midnight of that day in local time.
 * Throws on anything that is not a valid calendar date.
 */
export function parseDate(s: string): Date {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) throw new Error(`invalid date: ${s}`);
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) throw new Error(`invalid date: ${s}`);
  return d;
}

/** Format a Date as `YYYY-MM-DD` using its local calendar day. */
export function formatDate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** The same local time `n` calendar days later (or earlier for negative `n`). */
export function addDays(d: Date, n: number): Date {
  const out = new Date(d.getTime());
  out.setDate(out.getDate() + n);
  return out;
}

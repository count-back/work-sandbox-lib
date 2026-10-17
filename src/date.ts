const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Parse a calendar date written as `YYYY-MM-DD` and return midnight of that day in local time.
 * Throws on anything that is not a valid calendar date.
 */
export function parseDate(s: string): Date {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) throw new Error(`invalid date: ${s}`);
  const [y, m, day] = s.split('-').map(Number);
  // Build local midnight; `new Date(y, ...)` would remap years 0-99 to 1900+y.
  const d = new Date(0);
  d.setFullYear(y, m - 1, day);
  d.setHours(0, 0, 0, 0);
  // Out-of-range parts roll over into another valid date, so verify round-trip.
  if (d.getFullYear() !== y || d.getMonth() !== m - 1 || d.getDate() !== day) {
    throw new Error(`invalid date: ${s}`);
  }
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

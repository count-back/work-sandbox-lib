/** Lowercase, ASCII letters and digits joined by single dashes. */
export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** Upper-case the first character. */
export function capitalize(s: string): string {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

/** Truncate to at most `max` code points, ending with an ellipsis when cut. */
export function truncate(s: string, max: number): string {
  const limit = Math.floor(max);
  if (limit <= 0) return '';
  const codePoints = Array.from(s);
  if (codePoints.length <= limit) return s;
  return codePoints.slice(0, limit - 1).join('') + '\u2026';
}

/** Lowercase, ASCII letters and digits joined by single dashes. */
export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** Upper-case the first character. */
export function capitalize(s: string): string {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

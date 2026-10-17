/** Lowercase, ASCII letters and digits joined by single dashes. */
export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** Upper-case the first character. */
export function capitalize(s: string): string {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

/** Cut to at most `max` characters, ending in an ellipsis when cut. */
export function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1) + '…' : s;
}

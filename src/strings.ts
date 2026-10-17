/** Lowercase, ASCII letters and digits joined by single dashes. */
export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** Upper-case the first character. */
export function capitalize(s: string): string {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

/** Pad `s` on the left with `ch` until it is `width` characters long. Throws a RangeError if `ch` is not a single character. */
export function padStartTo(s: string, width: number, ch: string = ' '): string {
  if (ch.length !== 1) {
    throw new RangeError('ch must be a single character');
  }
  if (!Number.isFinite(width)) {
    return s;
  }
  const target = Math.floor(width);
  if (s.length >= target) {
    return s;
  }
  return s.padStart(target, ch);
}

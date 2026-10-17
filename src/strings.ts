/** Lowercase, ASCII letters and digits joined by single dashes. */
export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** Upper-case the first character. */
export function capitalize(s: string): string {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

/** Convert kebab-case, snake_case or space-separated text to camelCase. */
export function camelCase(s: string): string {
  const words = s.split(/[-_\s]+/).filter((word) => word.length > 0);
  return words
    .map((word, index) => (index === 0 ? word.toLowerCase() : capitalize(word.toLowerCase())))
    .join('');
}

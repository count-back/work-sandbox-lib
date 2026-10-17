import { describe, expect, it } from 'vitest';
import { addDays, formatDate, parseDate } from '../src/date.js';

describe('date', () => {
  it('formats a local date', () => {
    expect(formatDate(new Date(2024, 0, 5))).toBe('2024-01-05');
  });

  it('adds days across a month end', () => {
    expect(formatDate(addDays(new Date(2024, 0, 30), 3))).toBe('2024-02-02');
  });

  it('rejects malformed input', () => {
    expect(() => parseDate('2024/01/05')).toThrow();
    expect(() => parseDate('2024-13-40')).toThrow();
  });
});

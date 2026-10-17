import { describe, expect, it } from 'vitest';
import { addDays, formatDate, parseDate } from '../src/date.js';

describe('date', () => {
  it('formats a local date', () => {
    expect(formatDate(new Date(2024, 0, 5))).toBe('2024-01-05');
  });

  it('adds days across a month end', () => {
    expect(formatDate(addDays(new Date(2024, 0, 30), 3))).toBe('2024-02-02');
  });

  it('parses as local midnight', () => {
    const d = parseDate('2024-03-10');
    expect(d.getFullYear()).toBe(2024);
    expect(d.getMonth()).toBe(2);
    expect(d.getDate()).toBe(10);
    expect(d.getHours()).toBe(0);
    expect(d.getMinutes()).toBe(0);
    expect(d.getSeconds()).toBe(0);
    expect(d.getMilliseconds()).toBe(0);
    expect(d.getTime()).toBe(new Date(2024, 2, 10).getTime());
  });

  it('round-trips through formatDate', () => {
    expect(formatDate(parseDate('2024-03-10'))).toBe('2024-03-10');
  });

  it('rejects malformed input', () => {
    expect(() => parseDate('2024/01/05')).toThrow();
    expect(() => parseDate('2024-13-40')).toThrow();
  });

  it('rejects dates that would roll over', () => {
    expect(() => parseDate('2024-02-30')).toThrow();
  });
});

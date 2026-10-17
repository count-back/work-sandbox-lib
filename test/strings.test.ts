import { describe, expect, it } from 'vitest';
import { capitalize, slugify, truncate } from '../src/strings.js';

describe('strings', () => {
  it('slugifies', () => {
    expect(slugify('  Hello, World! ')).toBe('hello-world');
  });

  it('capitalizes', () => {
    expect(capitalize('abc')).toBe('Abc');
    expect(capitalize('')).toBe('');
  });

  it('returns short strings unchanged', () => {
    expect(truncate('hello', 5)).toBe('hello');
    expect(truncate('', 3)).toBe('');
    expect(truncate('hi', 10)).toBe('hi');
  });

  it('truncates long strings with an ellipsis', () => {
    expect(truncate('hello world', 5)).toBe('hell\u2026');
  });

  it('counts and truncates by code point', () => {
    expect(truncate('😀😀😀', 3)).toBe('😀😀😀');
    const cut = truncate('😀😀😀😀', 3);
    expect(cut).toBe('😀😀\u2026');
    expect(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(cut)).toBe(false);
    expect(Array.from(cut).length).toBe(3);
  });

  it('handles CJK characters by code point', () => {
    expect(truncate('你好世界', 3)).toBe('你好\u2026');
  });

  it('handles boundary limits', () => {
    expect(truncate('abc', 1)).toBe('\u2026');
    expect(truncate('abc', 0)).toBe('');
    expect(truncate('abc', -5)).toBe('');
    expect(truncate('hello world', 5.9)).toBe('hell\u2026');
  });

  it('never exceeds max code points', () => {
    const samples = ['hello world', '😀😀😀😀', '你好世界', ''];
    for (const sample of samples) {
      for (let max = 0; max <= 6; max++) {
        expect(Array.from(truncate(sample, max)).length).toBeLessThanOrEqual(max);
      }
    }
  });
});

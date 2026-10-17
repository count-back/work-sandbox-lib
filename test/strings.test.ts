import { describe, expect, it } from 'vitest';
import { capitalize, padStartTo, slugify } from '../src/strings.js';

describe('strings', () => {
  it('slugifies', () => {
    expect(slugify('  Hello, World! ')).toBe('hello-world');
  });

  it('capitalizes', () => {
    expect(capitalize('abc')).toBe('Abc');
    expect(capitalize('')).toBe('');
  });

  it('pads on the left with spaces by default', () => {
    expect(padStartTo('7', 3)).toBe('  7');
  });

  it('pads on the left with a custom character', () => {
    expect(padStartTo('7', 3, '0')).toBe('007');
  });

  it('returns the string unchanged when it is already long enough', () => {
    expect(padStartTo('abc', 3)).toBe('abc');
    expect(padStartTo('abc', 2)).toBe('abc');
  });

  it('returns the string unchanged for non-positive widths', () => {
    expect(padStartTo('abc', 0)).toBe('abc');
    expect(padStartTo('abc', -5)).toBe('abc');
  });

  it('pads an empty string', () => {
    expect(padStartTo('', 2, '-')).toBe('--');
  });

  it('throws a RangeError when ch is not a single character', () => {
    expect(() => padStartTo('7', 3, '')).toThrow(RangeError);
    expect(() => padStartTo('7', 3, 'ab')).toThrow(RangeError);
  });
});

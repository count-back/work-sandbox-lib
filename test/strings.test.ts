import { describe, expect, it } from 'vitest';
import { capitalize, reverse, slugify } from '../src/strings.js';

describe('strings', () => {
  it('slugifies', () => {
    expect(slugify('  Hello, World! ')).toBe('hello-world');
  });

  it('capitalizes', () => {
    expect(capitalize('abc')).toBe('Abc');
    expect(capitalize('')).toBe('');
  });

  it('reverses by code point', () => {
    expect(reverse('abc')).toBe('cba');
    expect(reverse('')).toBe('');
    expect(reverse('你好')).toBe('好你');
    expect(reverse('a😀b')).toBe('b😀a');
    expect(reverse('😀🎉')).toBe('🎉😀');
    // No lone surrogates: a single emoji round-trips unchanged.
    expect(reverse('😀')).toBe('😀');
    const input = 'a😀b🎉';
    expect(Array.from(reverse(input)).length).toBe(Array.from(input).length);
  });
});

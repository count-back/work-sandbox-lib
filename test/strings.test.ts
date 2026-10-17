import { describe, expect, it } from 'vitest';
import { capitalize, isBlank, slugify } from '../src/strings.js';

describe('strings', () => {
  it('slugifies', () => {
    expect(slugify('  Hello, World! ')).toBe('hello-world');
  });

  it('capitalizes', () => {
    expect(capitalize('abc')).toBe('Abc');
    expect(capitalize('')).toBe('');
  });

  it('detects blank strings', () => {
    expect(isBlank('')).toBe(true);
    expect(isBlank('   ')).toBe(true);
    expect(isBlank('\t\n \r')).toBe(true);
    expect(isBlank('a')).toBe(false);
    expect(isBlank('  a  ')).toBe(false);
  });
});

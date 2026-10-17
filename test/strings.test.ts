import { describe, expect, it } from 'vitest';
import { capitalize, slugify } from '../src/strings.js';

describe('strings', () => {
  it('slugifies', () => {
    expect(slugify('  Hello, World! ')).toBe('hello-world');
  });

  it('collapses consecutive separators', () => {
    expect(slugify('foo---bar')).toBe('foo-bar');
    expect(slugify('a  _ b')).toBe('a-b');
    expect(slugify('--Hello,,,  World!!--')).toBe('hello-world');
  });

  it('capitalizes', () => {
    expect(capitalize('abc')).toBe('Abc');
    expect(capitalize('')).toBe('');
  });
});

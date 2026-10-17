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
});

describe('truncate', () => {
  it('cuts long strings with an ellipsis', () => {
    expect(truncate('hello world', 8)).toBe('hello w…');
    expect(truncate('hi', 5)).toBe('hi');
  });
});

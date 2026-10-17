import { describe, expect, it } from 'vitest';
import { camelCase, capitalize, slugify } from '../src/strings.js';

describe('strings', () => {
  it('slugifies', () => {
    expect(slugify('  Hello, World! ')).toBe('hello-world');
  });

  it('capitalizes', () => {
    expect(capitalize('abc')).toBe('Abc');
    expect(capitalize('')).toBe('');
  });

  it('camelCases', () => {
    expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
    expect(camelCase('foo_bar_baz')).toBe('fooBarBaz');
    expect(camelCase('foo bar baz')).toBe('fooBarBaz');
    expect(camelCase('  --Foo__BAR  baz-- ')).toBe('fooBarBaz');
    expect(camelCase('foo')).toBe('foo');
    expect(camelCase('')).toBe('');
    expect(camelCase('-_ ')).toBe('');
    expect(camelCase('foo-1-bar')).toBe('foo1Bar');
  });
});

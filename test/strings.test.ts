import { describe, expect, it } from 'vitest';
import { capitalize, kebabCase, slugify } from '../src/strings.js';

describe('strings', () => {
  it('slugifies', () => {
    expect(slugify('  Hello, World! ')).toBe('hello-world');
  });

  it('capitalizes', () => {
    expect(capitalize('abc')).toBe('Abc');
    expect(capitalize('')).toBe('');
  });

  it('kebab-cases', () => {
    expect(kebabCase('fooBar')).toBe('foo-bar');
    expect(kebabCase('FooBarBaz')).toBe('foo-bar-baz');
    expect(kebabCase('foo bar')).toBe('foo-bar');
    expect(kebabCase('foo_bar')).toBe('foo-bar');
    expect(kebabCase('  foo__bar  baz ')).toBe('foo-bar-baz');
    expect(kebabCase('XMLHttpRequest')).toBe('xml-http-request');
    expect(kebabCase('version2Update')).toBe('version2-update');
    expect(kebabCase('foo-bar')).toBe('foo-bar');
    expect(kebabCase('')).toBe('');
  });
});

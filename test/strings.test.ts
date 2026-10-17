import { describe, expect, it } from 'vitest';
import { capitalize, slugify, toKebab } from '../src/strings.js';

describe('strings', () => {
  it('slugifies', () => {
    expect(slugify('  Hello, World! ')).toBe('hello-world');
  });

  it('capitalizes', () => {
    expect(capitalize('abc')).toBe('Abc');
    expect(capitalize('')).toBe('');
  });

  it('kebab-cases', () => {
    expect(toKebab('fooBar')).toBe('foo-bar');
    expect(toKebab('FooBarBaz')).toBe('foo-bar-baz');
    expect(toKebab('foo bar')).toBe('foo-bar');
    expect(toKebab('foo_bar')).toBe('foo-bar');
    expect(toKebab('  foo__bar  baz ')).toBe('foo-bar-baz');
    expect(toKebab('XMLHttpRequest')).toBe('xml-http-request');
    expect(toKebab('version2Update')).toBe('version2-update');
    expect(toKebab('foo-bar')).toBe('foo-bar');
    expect(toKebab('')).toBe('');
  });
});

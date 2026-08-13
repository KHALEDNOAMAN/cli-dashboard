import { red, green } from '../src/utils/colors';

describe('Color Utils', () => {
  it('wraps text in red ANSI escape codes', () => {
    expect(red('test')).toBe('\\x1b[31mtest\\x1b[0m');
  });

  it('wraps text in green ANSI escape codes', () => {
    expect(green('test')).toBe('\\x1b[32mtest\\x1b[0m');
  });
});

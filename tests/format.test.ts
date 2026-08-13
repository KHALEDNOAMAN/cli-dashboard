import { formatBytes, drawBar } from '../src/utils/format';

describe('Format Utils', () => {
  it('formats bytes correctly', () => {
    expect(formatBytes(1024)).toBe('1 KB');
    expect(formatBytes(1048576)).toBe('1 MB');
  });

  it('draws a bar', () => {
    expect(drawBar(50, 100, 10)).toBe('█████░░░░░');
  });
});

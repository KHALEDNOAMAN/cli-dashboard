export function drawBar(val: number, max: number, width: number): string {
  const percent = Math.max(0, Math.min(1, val / max));
  const filled = Math.round(width * percent);
  const empty = width - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
}

export function formatBytes(bytes: number, decimals = 2): string {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

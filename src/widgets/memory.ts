import si from 'systeminformation';
import { drawBar, formatBytes } from '../utils/format';
import { cyan } from '../utils/colors';

export async function getMemoryWidget(): Promise<string> {
  try {
    const mem = await si.mem();
    const used = mem.active;
    const total = mem.total;
    const percent = Math.round((used / total) * 100);
    
    const bar = drawBar(percent, 100, 20);
    return `Memory:    ${cyan(`[${bar}] ${percent}%`)} (${formatBytes(used)} / ${formatBytes(total)})`;
  } catch (e) {
    return 'Memory: Error reading data';
  }
}

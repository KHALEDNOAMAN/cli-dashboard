import si from 'systeminformation';
import { drawBar, formatBytes } from '../utils/format';
import { magenta } from '../utils/colors';

export async function getDiskWidget(): Promise<string> {
  try {
    const fsSize = await si.fsSize();
    if (!fsSize || fsSize.length === 0) return 'Disk: No data';
    const mainDisk = fsSize[0];
    const percent = Math.round(mainDisk.use);
    const bar = drawBar(percent, 100, 20);
    
    return `Disk (C:): ${magenta(`[${bar}] ${percent}%`)} (${formatBytes(mainDisk.used)} / ${formatBytes(mainDisk.size)})`;
  } catch (e) {
    return 'Disk: Error reading data';
  }
}

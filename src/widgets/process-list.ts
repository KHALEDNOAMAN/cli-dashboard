import si from 'systeminformation';
import { yellow } from '../utils/colors';

export async function getProcessListWidget(): Promise<string> {
  try {
    const procs = await si.processes();
    const list = procs.list
      .sort((a, b) => b.cpu - a.cpu)
      .slice(0, 3)
      .map(p => `${p.name.padEnd(15)} ${p.cpu.toFixed(1)}%`)
      .join(' | ');
      
    return `Top Procs: ${yellow(list || 'None')}`;
  } catch (e) {
    return 'Top Procs: Error reading data';
  }
}

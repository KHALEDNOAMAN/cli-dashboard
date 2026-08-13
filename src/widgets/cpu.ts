import si from 'systeminformation';
import { drawBar } from '../utils/format';
import { red, green, yellow } from '../utils/colors';

export async function getCpuWidget(): Promise<string> {
  try {
    const load = await si.currentLoad();
    const loadInt = Math.round(load.currentLoad);
    const bar = drawBar(loadInt, 100, 20);
    
    let color = green;
    if (loadInt > 80) color = red;
    else if (loadInt > 50) color = yellow;

    return `CPU Usage: ${color(`[${bar}] ${loadInt}%`)}`;
  } catch (e) {
    return 'CPU Usage: Error reading data';
  }
}

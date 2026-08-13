import si from 'systeminformation';
import { formatBytes } from '../utils/format';
import { blue } from '../utils/colors';

export async function getNetworkWidget(): Promise<string> {
  try {
    const net = await si.networkStats();
    if (!net || net.length === 0) return 'Network: No data';
    const active = net[0];
    
    return `Network:   ${blue(`↓ ${formatBytes(active.rx_sec)}/s  ↑ ${formatBytes(active.tx_sec)}/s`)}`;
  } catch (e) {
    return 'Network: Error reading data';
  }
}

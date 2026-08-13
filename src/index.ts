import { getCpuWidget } from './widgets/cpu';
import { getMemoryWidget } from './widgets/memory';
import { getDiskWidget } from './widgets/disk';
import { getNetworkWidget } from './widgets/network';
import { getGitStatsWidget } from './widgets/git-stats';
import { getProcessListWidget } from './widgets/process-list';
import type { DashboardConfig } from './types';

export function renderDashboard(config: DashboardConfig) {
  console.log(`Starting dashboard with theme ${config.theme} and refresh ${config.refreshInterval}ms...`);
  
  const loop = setInterval(async () => {
    console.clear();
    console.log('--- CLI DASHBOARD ---');
    console.log(await getCpuWidget());
    console.log(await getMemoryWidget());
    console.log(await getDiskWidget());
    console.log(await getNetworkWidget());
    console.log(await getGitStatsWidget());
    console.log(await getProcessListWidget());
  }, config.refreshInterval);

  process.on('SIGINT', () => {
    clearInterval(loop);
    console.log('\nExiting dashboard...');
    process.exit(0);
  });
}

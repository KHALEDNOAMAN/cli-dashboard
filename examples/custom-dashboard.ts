import { renderDashboard } from '../src/index';

// Custom startup
console.log('Booting custom dashboard...');
renderDashboard({
  refreshInterval: 2000,
  theme: 'light'
});

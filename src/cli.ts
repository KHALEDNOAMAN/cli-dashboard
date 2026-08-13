#!/usr/bin/env node
import { Command } from 'commander';
import { renderDashboard } from './index';

const program = new Command();

program
  .name('dashboard')
  .description('A beautiful CLI dashboard tool')
  .version('1.0.0')
  .option('-r, --refresh <ms>', 'Refresh interval in milliseconds', '1000')
  .option('-t, --theme <name>', 'Theme (dark, light)', 'dark')
  .action((options) => {
    renderDashboard({
      refreshInterval: parseInt(options.refresh, 10),
      theme: options.theme,
    });
  });

program.parse(process.argv);

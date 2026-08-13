import { execSync } from 'child_process';
import { gray } from '../utils/colors';

export async function getGitStatsWidget(): Promise<string> {
  try {
    const isGit = execSync('git rev-parse --is-inside-work-tree 2>nul || echo false').toString().trim();
    if (isGit !== 'true') return 'Git Stats: Not a git repository';

    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    const commits = execSync('git rev-list --count HEAD 2>nul || echo 0').toString().trim();
    const status = execSync('git status --short').toString().trim();
    const changes = status ? status.split('\\n').length : 0;

    return `Git Stats: ${gray(`Branch: ${branch} | Commits: ${commits} | Changes: ${changes}`)}`;
  } catch (e) {
    return 'Git Stats: Not a git repository';
  }
}

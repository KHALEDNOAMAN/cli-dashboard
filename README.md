# CLI Dashboard

```text
 _________________________________________
| CPU Usage  [||||||||||        ] 50%     |
| Memory     [||||||||||||||    ] 70%     |
| Disk       [||||||            ] 30%     |
|_________________________________________|
```

A beautiful, terminal-based system dashboard for monitoring CPU, memory, disk, network, and Git stats.

## Features
- Real-time CPU and Memory monitoring
- Disk usage statistics
- Network activity visualization
- Git repository stats (commits, branches)
- Top processes by CPU/Memory

## Installation & Usage

You can run it directly without installing:

```bash
npx @khalednoaman/cli-dashboard
```

Or install globally:

```bash
npm install -g @khalednoaman/cli-dashboard
dashboard --refresh 1000 --theme dark
```

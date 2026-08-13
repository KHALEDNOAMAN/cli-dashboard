# Contributing to cli-dashboard

## Adding a Widget
1. Create `src/widgets/your-widget.ts`
2. Implement the `Widget` interface
3. Register in `src/index.ts`
4. Add tests
5. Submit a PR

## Widget Interface
```typescript
interface Widget {
  name: string;
  render(): Promise<string>;
}
```

## Running Locally
```bash
npm install
npm run dev
```
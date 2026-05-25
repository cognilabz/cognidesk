# Cognidesk

Cognidesk is a TypeScript runtime SDK for building customer support agents as code.

The current repository is being implemented from the language in [CONTEXT.md](./CONTEXT.md) and the ADRs in [docs/adr](./docs/adr).

## Flight Demo

Run the mocked flight service demo:

```bash
docker compose up --build
```

Then open `http://localhost:5173`. The API is served at `http://localhost:8787/api` and persists SQLite data in the `flight_demo_data` Docker volume.

For local development without Docker, run these in separate terminals:

```bash
pnpm --filter @cognidesk/flight-demo dev:server
pnpm --filter @cognidesk/flight-demo dev
```

## Development

```bash
pnpm install
pnpm check
```

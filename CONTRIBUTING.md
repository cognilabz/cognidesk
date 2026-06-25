# Contributing to Cognidesk

Thank you for your interest in contributing! This guide will help you get set up.

## Development setup

```bash
git clone https://github.com/cognilabz/cognidesk.git
cd cognidesk
pnpm install
pnpm check
```

## Repository structure

```
packages/          # SDK packages and Studio integration surfaces
apps/              # Demo applications and Cognidesk Studio
docs/adr/          # Architecture Decision Records
website/           # Documentation source (mkdocs-material)
CONTEXT.md         # Domain language definitions
```

## Architecture decisions

Significant technical decisions are recorded as Architecture Decision Records in [`docs/adr/`](./docs/adr/). Please review relevant ADRs before making changes to the areas they cover.

## Domain language

The project maintains a precise vocabulary defined in [`CONTEXT.md`](./CONTEXT.md). When contributing code or documentation, use the established terminology (e.g., "Journey" not "flow", "Runtime Event" not "notification").

## Running the demo

```bash
pnpm demo
```

## Submitting changes

1. Fork the repository and create a feature branch from `main`
2. Make your changes following the existing code style
3. Ensure `pnpm check` passes
4. Submit a pull request with a clear description of what and why

## Code style

- TypeScript strict mode throughout
- Zod for runtime validation schemas
- Use domain language from CONTEXT.md
- TSDoc comments on public API exports

## Reporting bugs

Open a GitHub issue with:
- Steps to reproduce
- Expected vs. actual behavior
- Environment details (Node version, OS, package versions)

## License

By contributing, you agree that your contributions will be licensed under the
Apache License, Version 2.0.

See [LICENSE](LICENSE) for the repository license.

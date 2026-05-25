FROM node:24-bookworm

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json tsconfig.base.json ./
COPY packages ./packages
COPY apps ./apps

RUN pnpm install --frozen-lockfile

EXPOSE 5173 8787

CMD ["sh", "-c", "pnpm --filter @cognidesk/flight-demo dev:server & pnpm --filter @cognidesk/flight-demo dev --host 0.0.0.0"]

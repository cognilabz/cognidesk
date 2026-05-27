FROM node:24-bookworm

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates git gh ripgrep openssh-client python3 build-essential \
  && rm -rf /var/lib/apt/lists/*

RUN corepack enable \
  && npm install -g @openai/codex

WORKDIR /workspace

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY packages/studio-contracts ./packages/studio-contracts
COPY packages/studio-operator-skills ./packages/studio-operator-skills
COPY apps/studio-operator-runtime ./apps/studio-operator-runtime

RUN pnpm install --frozen-lockfile --filter @cognidesk/studio-operator-runtime...

ENV HOST=0.0.0.0
ENV PORT=4099
ENV STUDIO_OPERATOR_SANDBOX_ROOT=/sandboxes

EXPOSE 4099

CMD ["pnpm", "--filter", "@cognidesk/studio-operator-runtime", "start"]

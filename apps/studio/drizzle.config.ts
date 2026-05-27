import { defineConfig } from "drizzle-kit";

const provider = process.env.STUDIO_DATABASE_PROVIDER ?? "sqlite";

export default defineConfig({
  dialect: provider === "postgres" ? "postgresql" : "sqlite",
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dbCredentials: provider === "postgres"
    ? {
        url: process.env.STUDIO_DATABASE_URL ?? "postgres://studio:studio@127.0.0.1:5432/cognidesk_studio",
      }
    : {
        url: process.env.STUDIO_DATABASE_URL ?? "file:./data/studio.sqlite",
      },
  strict: true,
  verbose: true,
});

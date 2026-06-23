import { defineConfig } from "drizzle-kit";

const provider = (process.env.STUDIO_DATABASE_PROVIDER ?? "sqlite").trim().toLowerCase();
if (provider !== "sqlite") {
  throw new Error("STUDIO_DATABASE_PROVIDER=postgres is not supported by Studio yet; Drizzle generation is SQLite-only.");
}

const databaseUrl = process.env.STUDIO_DATABASE_URL ?? "file:./data/studio.sqlite";
if (/^[a-z][a-z0-9+.-]*:/i.test(databaseUrl) && !databaseUrl.startsWith("file:")) {
  throw new Error("STUDIO_DATABASE_URL must be a SQLite filename, :memory:, or file: URL; Postgres URLs are not supported by Studio yet.");
}

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: databaseUrl,
  },
  strict: true,
  verbose: true,
});

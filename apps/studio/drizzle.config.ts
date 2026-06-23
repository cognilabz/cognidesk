import { defineConfig } from "drizzle-kit";

const provider = (process.env.STUDIO_DATABASE_PROVIDER ?? "sqlite").trim().toLowerCase();
if (provider !== "sqlite") {
  throw new Error("Studio Drizzle generation is SQLite-only; set STUDIO_DATABASE_PROVIDER=sqlite or leave it unset.");
}

const databaseUrl = (process.env.STUDIO_DATABASE_URL ?? "file:./data/studio.sqlite").trim();
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

# Use Drizzle for Studio database access

Cognidesk Studio will use Drizzle from the beginning for Studio Database schema, migrations, and type-safe data access, wrapped in server-only repository modules rather than imported directly throughout the UI. V1 officially supports SQLite for local development and Postgres for production; other databases are future adapter work. Studio Database migrations belong to the `apps/studio` deployment lifecycle, not the Runtime SDK package lifecycle, preserving Studio as an optional app with its own operational schema.

import { ensureStudioDatabase } from "../src/server/db/client.js";

await ensureStudioDatabase();
console.log("Studio database schema is ready.");

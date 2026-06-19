import { describe, expect, it } from "vitest";
import {
  postgresStorageProviderManifest,
  sqliteStorageProviderManifest,
  storageProviderManifests,
} from "../src/manifests.js";

describe("storage provider manifests", () => {
  it("exports official SQLite and Postgres storage manifests", () => {
    expect(storageProviderManifests).toHaveLength(2);
    expect(sqliteStorageProviderManifest).toMatchObject({
      id: "storage.sqlite",
      packageName: "@cognidesk/storage",
      category: "storage",
      provider: "sqlite",
      trustLevel: "official",
      directions: ["bidirectional"],
      coverage: {
        scope: "local-protocol",
      },
    });
    expect(postgresStorageProviderManifest).toMatchObject({
      id: "storage.postgres",
      packageName: "@cognidesk/storage",
      category: "storage",
      provider: "postgres",
      trustLevel: "official",
      directions: ["bidirectional"],
      coverage: {
        scope: "local-protocol",
      },
    });
    expect(sqliteStorageProviderManifest.coverage.notes.join(" ")).toContain("not full SQLite API coverage");
    expect(postgresStorageProviderManifest.coverage.notes.join(" ")).toContain("not full PostgreSQL API coverage");
    expect(sqliteStorageProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "storage.create-conversation",
        "storage.append-event",
        "storage.snapshot",
        "storage.read-conversation",
      ]));
    expect(postgresStorageProviderManifest.credentialRequirements).toEqual([
      expect.objectContaining({
        id: "postgres-connection",
        required: true,
      }),
    ]);
    expect(sqliteStorageProviderManifest.capabilities.map((capability) => capability.description).join(" "))
      .toContain("SQLite-compatible database");
    expect(postgresStorageProviderManifest.capabilities.map((capability) => capability.description).join(" "))
      .toContain("Postgres database");
    expect(postgresStorageProviderManifest.capabilities.map((capability) => capability.description).join(" "))
      .not.toContain("SQLite-compatible database");
    expect(storageProviderManifests.flatMap((manifest) => manifest.capabilities)
      .every((capability) => capability.extension)).toBe(true);
  });
});

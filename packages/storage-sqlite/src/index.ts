export interface SqliteStorageOptions {
  filename: string;
}

export function createSqliteStorage(options: SqliteStorageOptions) {
  return {
    kind: "sqlite-storage" as const,
    filename: options.filename,
  };
}

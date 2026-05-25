# Ship SQLite as the first storage adapter package

Cognidesk Core will define storage contracts, but SQLite will be implemented in a separate library package as the first concrete Storage Adapter. The SDK will not maintain a separate in-memory test storage path; tests and local development should exercise the real adapter contract through SQLite, including temporary or local-file configurations.

# Keep browser voice device handling low-level

The v1 Voice Browser Client will use the default microphone by default and allow optional media constraints or device id selection, but it will not ship a full device picker UI. The hook/client API should expose connection and media states such as permission denied, no device, connection failed, reconnect needed, muted, listening, speaking, and ended so applications can build their own interface.

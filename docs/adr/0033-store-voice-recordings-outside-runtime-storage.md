# Store voice recordings outside runtime storage

Cognidesk Voice Conversations will attach recordings through Voice Recording References while keeping recording bytes outside the core Runtime Storage Adapter. This preserves the existing event, snapshot, and conversation storage boundary, lets applications choose an appropriate media or artifact store, and avoids making audio retention, large blob storage, and media access policy part of the core conversation state model.

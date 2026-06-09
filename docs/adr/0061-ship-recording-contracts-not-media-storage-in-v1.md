# Ship recording contracts, not media storage, in v1

Cognidesk v1 voice support will include recording policy, recording lifecycle events, and Voice Recording References, but it will not ship a server-side media storage implementation. Applications and future adapters can provide recording storage behind the established reference boundary, while v1 remains focused on finalized transcript, voice lifecycle, WebRTC connection, and server-side control integration.

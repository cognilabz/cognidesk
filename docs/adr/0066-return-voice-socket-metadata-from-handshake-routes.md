---
status: accepted
---

# Return voice socket metadata from handshake routes

Cognidesk voice handshake routes will return Cognidesk conversation, channel segment, connection, event stream, and Voice Browser Protocol socket metadata instead of SDP or provider session data. The default socket address is scoped to the Voice Connection, while the short-lived token may be supplied through the URL or WebSocket subprotocol so applications can choose the credential handling style that fits their deployment.

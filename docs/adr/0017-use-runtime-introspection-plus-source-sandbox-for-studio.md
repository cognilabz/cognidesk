# Use runtime introspection plus source sandbox for Studio

Cognidesk Studio will use a read-only Studio Introspection API as the primary boundary for compiled runtime facts, while the Studio Operator may also inspect and modify target source code through a disposable Studio Source Sandbox. This avoids treating source scraping as runtime truth, but still gives the Studio Operator enough code context to answer implementation questions and prepare pull requests.

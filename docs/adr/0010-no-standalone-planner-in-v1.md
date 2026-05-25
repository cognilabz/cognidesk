# Do not add a standalone planner in v1

Cognidesk v1 will not include a separate planner step. The runtime should rely on Journey Candidate Retrieval, Matcher, Journey Policy, Extraction, Action Scheduler, Knowledge Retrieval, and Response Coordinator so the SDK stays focused on speed, accuracy, and token cost control instead of adding another broad LLM planning layer.

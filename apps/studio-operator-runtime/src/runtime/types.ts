import type { WebSocket } from "ws";
import type { StudioOperatorReasoningEffort } from "@cognidesk/studio-contracts";

export interface StudioClaims {
  userId: string;
  role: string;
  permissions?: string[];
  sessionToken?: string;
}

export interface OperatorSession {
  sessionId: string;
  targetId: string;
  modelId?: string;
  userId: string;
  sandboxPath: string;
  threadId: string;
  currentTurnId?: string;
  socket: WebSocket;
  reasoningEffort?: StudioOperatorReasoningEffort;
}

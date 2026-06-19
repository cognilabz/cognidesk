import type { OpenAIRealtimeWS } from "openai/realtime/ws";
import type { OpenAIRealtimeFactoryInput, OpenAIRealtimeSocket } from "./contracts.js";

export async function createOpenAIRealtimeSocket(
  input: OpenAIRealtimeFactoryInput,
): Promise<OpenAIRealtimeSocket> {
  const { OpenAIRealtimeWS } = await import("openai/realtime/ws");
  const socket = await OpenAIRealtimeWS.create(input.client, { model: input.model });
  await waitForRealtimeOpen(socket);
  return socket;
}

async function waitForRealtimeOpen(socket: OpenAIRealtimeWS) {
  if (socket.socket.readyState === socket.socket.OPEN) return;
  await new Promise<void>((resolve, reject) => {
    const cleanup = () => {
      socket.socket.off("open", onOpen);
      socket.socket.off("error", onError);
    };
    const onOpen = () => {
      cleanup();
      resolve();
    };
    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };
    socket.socket.once("open", onOpen);
    socket.socket.once("error", onError);
  });
}

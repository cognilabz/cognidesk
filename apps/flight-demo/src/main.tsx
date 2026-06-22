import { StrictMode, useCallback, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import type { RuntimeEvent } from "@cognidesk/core";
import {
  ChatWidget,
  createCognideskClient,
  useVoice,
  type ListConversationsResult,
  type WidgetRendererProps,
} from "@cognidesk/react";
import "@cognidesk/ui/styles.css";
import "streamdown/styles.css";
import "./styles.css";

const agentId = "flight-service";
const apiBaseUrl = import.meta.env.VITE_COGNIDESK_API_URL ?? "http://localhost:8787/api";
const demoApiBaseUrl = apiBaseUrl.replace(/\/+$/, "");

type ConversationSummary = ListConversationsResult["conversations"][number];

type DiscordStatus =
  | { enabled: false; ready: false }
  | {
      enabled: true;
      ready: boolean;
      guildId: string;
      supportChannelId: string;
      applicationId: string;
      botUser?: { id: string; tag: string };
    };

function App() {
  const [activeConversationId, setActiveConversationId] = useState<string | null>(() => {
    return new URL(window.location.href).searchParams.get("conversationId");
  });
  const [conversations, setConversations] = useState<ConversationSummary[]>([]);
  const [conversationError, setConversationError] = useState<string | null>(null);
  const [discordStatus, setDiscordStatus] = useState<DiscordStatus>({ enabled: false, ready: false });
  const [discordThreadUrl, setDiscordThreadUrl] = useState<string | null>(null);
  const [discordBusy, setDiscordBusy] = useState(false);
  const [discordError, setDiscordError] = useState<string | null>(null);
  const client = useMemo(() => createCognideskClient({
    baseUrl: apiBaseUrl,
  }), []);
  const refreshConversations = useCallback(async () => {
    try {
      const result = await client.listConversations({ agentId, limit: 50 });
      setConversations(result.conversations);
      setConversationError(null);
    } catch (error) {
      setConversationError(error instanceof Error ? error.message : "Failed to load conversations.");
    }
  }, [client]);
  const handleConversationCreated = useCallback((conversationId: string) => {
    setActiveConversationId(conversationId);
    setDiscordThreadUrl(null);
    void refreshConversations();
  }, [refreshConversations]);
  const voice = useVoice({
    client,
    agentId,
    ...(activeConversationId ? { conversationId: activeConversationId } : {}),
    initialContext: {},
    onConversationCreated: handleConversationCreated,
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    if (activeConversationId) {
      url.searchParams.set("conversationId", activeConversationId);
    } else {
      url.searchParams.delete("conversationId");
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }, [activeConversationId]);

  useEffect(() => {
    void refreshConversations();
    const interval = window.setInterval(() => {
      void refreshConversations();
    }, 2_500);
    return () => window.clearInterval(interval);
  }, [refreshConversations]);

  useEffect(() => {
    let active = true;
    const loadStatus = async () => {
      try {
        const response = await fetch(`${demoApiBaseUrl}/demo/discord/status`);
        const status = await response.json() as DiscordStatus;
        if (active) setDiscordStatus(status);
      } catch {
        if (active) setDiscordStatus({ enabled: false, ready: false });
      }
    };
    void loadStatus();
    const interval = window.setInterval(() => {
      void loadStatus();
    }, 5_000);
    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  const selectConversation = (conversationId: string | null) => {
    if (voice.status === "connected") voice.stop();
    setActiveConversationId(conversationId);
    setDiscordThreadUrl(null);
  };

  const continueInDiscord = async () => {
    if (!activeConversationId || !discordStatus.enabled) return;
    setDiscordBusy(true);
    setDiscordError(null);
    setDiscordThreadUrl(null);
    try {
      if (voice.status === "connected") voice.stop();
      const response = await fetch(`${demoApiBaseUrl}/demo/discord/continue`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ conversationId: activeConversationId }),
      });
      const result = await response.json() as { discordThreadUrl?: string; error?: string };
      if (!response.ok || !result.discordThreadUrl) {
        throw new Error(result.error ?? `Discord continuation failed with ${response.status}.`);
      }
      setDiscordThreadUrl(result.discordThreadUrl);
      window.open(result.discordThreadUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      setDiscordError(error instanceof Error ? error.message : "Failed to continue in Discord.");
    } finally {
      setDiscordBusy(false);
    }
  };

  const handleWidgetSubmit = async (args: { promptId: string; kind: string; output: unknown }) => {
    if (!activeConversationId) return;
    const { events } = await client.listEvents(activeConversationId);
    if (isFlightSelectionPrompt(args.promptId)) {
      const snapshot = await client.getSnapshot(activeConversationId);
      const summary = formatSelectedFlightFromSnapshot(snapshot.snapshot?.journeyContext);
      await client.emitIntermediateMessage(activeConversationId, {
        text: summary
          ? `${summary} selected. Please add the passenger name to continue.`
          : "Flight selected. Please add the passenger name to continue.",
      });
      return;
    }
    if (
      args.kind === "confirmation"
      && args.promptId === "confirm:book-flight:book:bookFlight"
      && isConfirmed(args.output)
    ) {
      const booking = [...events].reverse().find(isSuccessfulBookingEvent);
      const result = booking?.data.result;
      if (!isRecord(result) || typeof result.bookingReference !== "string") return;
      await client.emitIntermediateMessage(activeConversationId, {
        text: `Mock booking confirmed. Booking reference: **${result.bookingReference}**.`,
        visibleToModel: true,
      });
      return;
    }
    if (isRoutePrompt(args.promptId)) {
      const search = [...events].reverse().find(isSuccessfulSearchEvent);
      const searchResult = search?.data.result;
      if (isRecord(searchResult) && Array.isArray(searchResult.flights)) {
        if (searchResult.flights.length > 0) {
          await client.emitIntermediateMessage(activeConversationId, {
            text: `${formatFlights(searchResult.flights)}\n\nChoose a flight to continue.`,
          });
          return;
        }
        const suggestions = [...events].reverse().find(isSuccessfulSuggestionEvent);
        const suggestionResult = suggestions?.data.result;
        await client.emitIntermediateMessage(activeConversationId, {
          text: formatNoFlights(searchResult, suggestionResult),
        });
      }
    }
  };

  return (
    <main className="demo-shell">
      <aside className="demo-sidebar" aria-label="Conversations">
        <div className="demo-sidebar-header">
          <strong>Conversations</strong>
          <button type="button" onClick={() => selectConversation(null)}>New</button>
        </div>
        <div className="demo-conversation-list">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              type="button"
              className={conversation.id === activeConversationId ? "is-active" : ""}
              onClick={() => selectConversation(conversation.id)}
            >
              <span>{formatConversationTitle(conversation)}</span>
              <small>{formatConversationMeta(conversation)}</small>
            </button>
          ))}
          {conversations.length === 0 ? <span className="demo-empty">No conversations yet</span> : null}
        </div>
        {conversationError ? <span className="demo-sidebar-error">{conversationError}</span> : null}
      </aside>
      <section className="demo-panel">
        <div className="demo-voice-bar">
          <div>
            <strong>Voice</strong>
            <span>{formatVoiceStatus(voice.status)}</span>
          </div>
          <div className="demo-voice-actions">
            {voice.status === "connected" ? (
              <button type="button" onClick={voice.stop}>End</button>
            ) : (
              <button type="button" disabled={voice.status === "requestingPermission" || voice.status === "connecting"} onClick={() => void voice.start()}>
                Start
              </button>
            )}
            <button type="button" disabled={!voice.localStream} onClick={() => voice.setMuted(!voice.muted)}>
              {voice.muted ? "Unmute" : "Mute"}
            </button>
          </div>
          {voice.error ? <span className="demo-voice-error">{voice.error.message}</span> : null}
        </div>
        <div className="demo-discord-bar">
          <div>
            <strong>Discord</strong>
            <span>{formatDiscordStatus(discordStatus)}</span>
          </div>
          <button
            type="button"
            disabled={!activeConversationId || !discordStatus.enabled || !discordStatus.ready || discordBusy}
            onClick={() => void continueInDiscord()}
          >
            {discordBusy ? "Connecting" : "Continue in Discord"}
          </button>
          {discordThreadUrl ? <a href={discordThreadUrl} target="_blank" rel="noreferrer">Open Discord thread</a> : null}
          {discordError ? <span className="demo-discord-error">{discordError}</span> : null}
        </div>
        <ChatWidget
          client={client}
          agentId={agentId}
          {...(activeConversationId ? { conversationId: activeConversationId } : {})}
          title="Flight support"
          placeholder="Ask about booking, ticket status, or flight info"
          widgets={{ confirmation: ConfirmationWidget }}
          onConversationCreated={handleConversationCreated}
          onWidgetSubmit={(args) => {
            void handleWidgetSubmit(args);
          }}
          appearance={{
            variables: {
              "--cd-color-primary": "#0f172a",
              "--cd-color-message-user": "#0f172a",
              "--cd-radius": "8px",
            },
          }}
        />
      </section>
    </main>
  );
}

function formatDiscordStatus(status: DiscordStatus) {
  if (!status.enabled) return "Disabled";
  if (!status.ready) return "Connecting";
  return status.botUser ? `Ready as ${status.botUser.tag}` : "Ready";
}

function formatVoiceStatus(status: string) {
  const labels: Record<string, string> = {
    idle: "Ready",
    requestingPermission: "Requesting microphone",
    connecting: "Connecting",
    connected: "Connected",
    ended: "Ended",
    error: "Error",
  };
  return labels[status] ?? status;
}

function formatConversationTitle(conversation: ConversationSummary) {
  const channel = conversation.channel;
  if (channel && typeof channel === "object" && channel.provider === "discord" && channel.externalThreadId) {
    return `Discord ${shortId(channel.externalThreadId)}`;
  }
  if (channel && typeof channel === "object" && channel.kind === "voice") return "Voice conversation";
  return `Conversation ${shortId(conversation.id)}`;
}

function formatConversationMeta(conversation: ConversationSummary) {
  const channel = conversation.channel;
  const channelLabel = typeof channel === "string"
    ? channel
    : channel?.provider ?? channel?.kind ?? "web";
  return `${channelLabel} · ${new Date(conversation.updatedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
}

function shortId(value: string) {
  return value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8) || "thread";
}

function isConfirmed(output: unknown) {
  return isRecord(output) && output.confirmed === true;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function isSuccessfulBookingEvent(event: RuntimeEvent): event is Extract<RuntimeEvent, { type: "tool.completed" }> {
  return event.type === "tool.completed"
    && event.data.toolName === "bookFlight"
    && event.data.success;
}

function isSuccessfulSearchEvent(event: RuntimeEvent): event is Extract<RuntimeEvent, { type: "tool.completed" }> {
  return event.type === "tool.completed"
    && event.data.toolName === "searchFlights"
    && event.data.success;
}

function isSuccessfulSuggestionEvent(event: RuntimeEvent): event is Extract<RuntimeEvent, { type: "tool.completed" }> {
  return event.type === "tool.completed"
    && event.data.toolName === "suggestFlightOptions"
    && event.data.success;
}

function isRoutePrompt(promptId: string) {
  return promptId === "fields:book-flight:collectRoute"
    || promptId === "fields:book-flight:noFlights"
    || promptId.startsWith("field:book-flight:collectRoute:")
    || promptId.startsWith("field:book-flight:noFlights:");
}

function isFlightSelectionPrompt(promptId: string) {
  return promptId === "field:book-flight:selectFlight:selectedFlightId"
    || promptId === "field:book-flight:noFlights:selectedFlightId";
}

function formatFlights(value: unknown) {
  const flights = Array.isArray(value) ? value.filter(isFlightLike) : [];
  if (flights.length === 0) return "I could not find any mocked flights for those details.";
  return [
    `I found ${flights.length === 1 ? "1 mocked flight" : `${flights.length} mocked flights`}:`,
    ...flights.map((flight) => `- **${flight.id}**: ${flight.origin} → ${flight.destination}, ${formatDateTime(flight.departureTime)}, €${flight.price}`),
  ].join("\n");
}

function formatNoFlights(searchResult: unknown, suggestionResult: unknown) {
  const routeFlights = isRecord(suggestionResult) && Array.isArray(suggestionResult.routeFlights)
    ? suggestionResult.routeFlights.filter(isFlightLike)
    : [];
  const allFlights = isRecord(suggestionResult) && Array.isArray(suggestionResult.allFlights)
    ? suggestionResult.allFlights.filter(isFlightLike)
    : [];
  if (routeFlights.length > 0) {
    return `No mocked flights matched that exact date, but this route has alternatives:\n${formatFlights(routeFlights)}`;
  }
  const searched = isRecord(searchResult) ? " for those details" : "";
  if (allFlights.length === 0) return `I could not find any mocked flights${searched}.`;
  return `I could not find mocked flights${searched}. Available mocked flights are:\n${formatFlights(allFlights)}`;
}

function formatSelectedFlightFromSnapshot(context: unknown) {
  if (!isRecord(context) || typeof context.selectedFlightId !== "string") return "";
  const flights = Array.isArray(context.availableFlights) ? context.availableFlights.filter(isFlightLike) : [];
  const selectedFlightId = context.selectedFlightId;
  const selected = flights.find((flight) => flight.id.toLowerCase() === selectedFlightId.toLowerCase());
  if (!selected) return selectedFlightId.toUpperCase();
  return `${selected.id} — ${selected.origin} → ${selected.destination}, ${formatDateTime(selected.departureTime)}, €${selected.price}`;
}

function isFlightLike(value: unknown): value is { id: string; origin: string; destination: string; departureTime: string; price: number } {
  return isRecord(value)
    && typeof value.id === "string"
    && typeof value.origin === "string"
    && typeof value.destination === "string"
    && typeof value.departureTime === "string"
    && typeof value.price === "number";
}

function formatDateTime(value: string) {
  return value.replace("T", " ").replace(":00.000Z", " UTC");
}

function ConfirmationWidget(props: WidgetRendererProps) {
  const input = props.input as { title?: string; message?: string; confirmLabel?: string; cancelLabel?: string };
  const output = isRecord(props.output) ? props.output : {};
  return (
    <div className="demo-confirmation">
      <strong>{input.title ?? "Confirm"}</strong>
      <span>{input.message ?? "Continue?"}</span>
      {props.submitted ? (
        <span>{output.confirmed === true ? "Confirmed" : "Not confirmed"}</span>
      ) : (
        <div className="demo-confirmation-actions">
          <button className="demo-confirmation-primary" type="button" disabled={props.disabled} onClick={() => props.submit({ confirmed: true })}>{input.confirmLabel ?? "Confirm"}</button>
          <button type="button" disabled={props.disabled} onClick={() => props.submit({ confirmed: false })}>{input.cancelLabel ?? "Cancel"}</button>
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root") as (HTMLElement & {
  __cognideskRoot?: ReturnType<typeof createRoot>;
}) | null;

if (!rootElement) throw new Error("Root element not found.");

const root = rootElement.__cognideskRoot ?? createRoot(rootElement);
rootElement.__cognideskRoot = root;

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

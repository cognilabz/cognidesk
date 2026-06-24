import { StrictMode, useCallback, useEffect, useMemo, useState, type KeyboardEvent } from "react";
import { createRoot } from "react-dom/client";
import { Check, Pencil, Trash2, X } from "lucide-react";
import type { RuntimeEvent } from "@cognidesk/core";
import {
  ChatWidget,
  createCognideskClient,
  useVoice,
  type ChatStartAction,
  type CognideskClient,
  type ListConversationsResult,
  type UseVoiceResult,
  type WidgetRendererProps,
} from "@cognidesk/react";
import "@cognidesk/ui/styles.css";
import "streamdown/styles.css";
import "./styles.css";

const agentId = "flight-service";
const apiBaseUrl = import.meta.env.VITE_COGNIDESK_API_URL ?? "http://localhost:8787/api";
const flightDiscordHandoffStatusEvent = "custom.flight.discord_handoff_status";
const flightEmailSwitchStatusEvent = "custom.flight.email_channel_switch_status";
const conversationHistoryStorageKey = "cognidesk.flightDemo.conversationHistory.v1";

type ConversationSummary = ListConversationsResult["conversations"][number];
type SessionMode = "chat" | "voice";
type ConversationHistoryPrefs = {
  titles: Record<string, string>;
  deletedIds: string[];
};
type DiscordConnectionStatus = {
  label: string;
  detail: string;
  url?: string;
};
type EmailSwitchStatus = {
  label: string;
  detail: string;
  state?: "sent" | "waiting" | "verified" | "failed";
};
type DiscordGatewayStatus = {
  enabled?: boolean;
  ready?: boolean;
};

function App() {
  const [activeConversationId, setActiveConversationId] = useState<string | null>(() => {
    return new URL(window.location.href).searchParams.get("conversationId");
  });
  const [newSessionMode, setNewSessionMode] = useState<SessionMode | null>(null);
  const [conversations, setConversations] = useState<ConversationSummary[]>([]);
  const [activeConversationEventState, setActiveConversationEventState] = useState<{
    conversationId: string | null;
    events: RuntimeEvent[];
  }>({ conversationId: null, events: [] });
  const [conversationError, setConversationError] = useState<string | null>(null);
  const [discordGatewayStatus, setDiscordGatewayStatus] = useState<DiscordGatewayStatus | null>(null);
  const [chatStarting, setChatStarting] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<ConversationHistoryPrefs>(loadConversationHistoryPrefs);
  const [editingConversationId, setEditingConversationId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [pendingDeleteConversationId, setPendingDeleteConversationId] = useState<string | null>(null);
  const [deletingConversationId, setDeletingConversationId] = useState<string | null>(null);
  const client = useMemo(() => createCognideskClient({
    baseUrl: apiBaseUrl,
  }), []);
  const chatAppearance = useMemo(() => ({
    variables: {
      "--cd-color-primary": "#0f172a",
      "--cd-color-message-user": "#0f172a",
      "--cd-radius": "8px",
    },
  }), []);
  const chatWidgets = useMemo(() => ({ confirmation: ConfirmationWidget }), []);
  const refreshConversations = useCallback(async () => {
    try {
      const result = await client.listConversations({ agentId, limit: 50 });
      setConversations(result.conversations);
      setConversationError(null);
    } catch (error) {
      setConversationError(error instanceof Error ? error.message : "Failed to load conversations.");
    }
  }, [client]);
  const deletedConversationIds = useMemo(() => new Set(conversationHistory.deletedIds), [conversationHistory.deletedIds]);
  const visibleConversations = useMemo(() => (
    conversations.filter((conversation) => conversation.lifecycle !== "closed" && !deletedConversationIds.has(conversation.id))
  ), [conversations, deletedConversationIds]);
  const updateConversationHistory = useCallback((updater: (current: ConversationHistoryPrefs) => ConversationHistoryPrefs) => {
    setConversationHistory((current) => {
      const next = normalizeConversationHistoryPrefs(updater(current));
      saveConversationHistoryPrefs(next);
      return next;
    });
  }, []);
  const handleConversationCreated = useCallback((conversationId: string) => {
    setActiveConversationId(conversationId);
    void refreshConversations();
  }, [refreshConversations]);
  const voice = useVoice({
    client,
    agentId,
    ...(activeConversationId ? { conversationId: activeConversationId } : {}),
    initialContext: {},
    chatStart: () => createFlightChatStart({
      returningCustomer: visibleConversations.length > 0,
      locale: navigator.language,
    }),
    onConversationCreated: handleConversationCreated,
  });
  const activeConversation = useMemo(() => (
    activeConversationId ? visibleConversations.find((conversation) => conversation.id === activeConversationId) ?? null : null
  ), [activeConversationId, visibleConversations]);
  const activeConversationEvents = activeConversationEventState.conversationId === activeConversationId
    ? activeConversationEventState.events
    : [];
  const sessionMode: SessionMode | null = activeConversationId
    ? conversationSessionMode(activeConversation) ?? newSessionMode ?? "chat"
    : newSessionMode;
  const visibleConversationId = sessionMode === "voice"
    ? activeConversationId ?? voice.conversationId
    : activeConversationId;
  const showSessionPicker = !activeConversationId && !newSessionMode;
  const discordConnection = useMemo(() => (
    getDiscordConnectionStatus(activeConversation, activeConversationEvents, discordGatewayStatus?.ready === true)
  ), [activeConversation, activeConversationEvents, discordGatewayStatus]);
  const emailSwitchStatus = useMemo(() => (
    getEmailSwitchStatus(activeConversationEvents)
  ), [activeConversationEvents]);
  const panelModeClass = showSessionPicker
    ? "is-session-picker"
    : sessionMode === "voice"
      ? "is-voice-session"
      : "is-chat-session";
  const hasChannelStatus = Boolean(discordConnection || emailSwitchStatus);
  const panelClassName = `demo-panel ${panelModeClass}${hasChannelStatus ? " has-channel-status" : ""}`;

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
    if (!activeConversationId || !deletedConversationIds.has(activeConversationId)) return;
    if (voice.status === "connected") voice.stop();
    setActiveConversationId(null);
    setNewSessionMode(null);
  }, [activeConversationId, deletedConversationIds, voice]);

  useEffect(() => {
    if (!activeConversationId) {
      setActiveConversationEventState({ conversationId: null, events: [] });
      return undefined;
    }
    let active = true;
    const loadEvents = async () => {
      try {
        const { events } = await client.listEvents(activeConversationId);
        if (active) setActiveConversationEventState({ conversationId: activeConversationId, events });
      } catch {
        if (active) setActiveConversationEventState({ conversationId: activeConversationId, events: [] });
      }
    };
    void loadEvents();
    const interval = window.setInterval(() => {
      void loadEvents();
    }, 2_500);
    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [activeConversationId, client]);

  useEffect(() => {
    let active = true;
    const loadDiscordStatus = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/demo/discord/status`);
        const status = await response.json();
        if (active) setDiscordGatewayStatus(parseDiscordGatewayStatus(status));
      } catch {
        if (active) setDiscordGatewayStatus(null);
      }
    };
    void loadDiscordStatus();
    const interval = window.setInterval(() => {
      void loadDiscordStatus();
    }, 2_500);
    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  const selectConversation = (conversationId: string | null) => {
    if (voice.status === "connected") voice.stop();
    setNewSessionMode(null);
    setActiveConversationId(conversationId);
  };

  const startChatSession = () => {
    if (voice.status === "connected") voice.stop();
    setActiveConversationId(null);
    setNewSessionMode("chat");
    setChatStarting(true);
    setConversationError(null);
    void client.createConversation({
      agentId,
      context: {},
      channel: "chat",
      chatStart: createFlightChatStart({
        returningCustomer: visibleConversations.length > 0,
        locale: navigator.language,
      }),
    }).then((result) => {
      setActiveConversationId(result.conversation.id);
      void refreshConversations();
    }).catch((error) => {
      setConversationError(error instanceof Error ? error.message : "Failed to start chat session.");
    }).finally(() => {
      setChatStarting(false);
    });
  };

  const startVoiceSession = () => {
    setNewSessionMode("voice");
    if (voice.status === "requestingPermission" || voice.status === "connecting" || voice.status === "connected") return;
    void voice.start().catch(() => undefined);
  };

  const returnToSessionPicker = () => {
    if (voice.status === "connected" || voice.status === "requestingPermission" || voice.status === "connecting") {
      voice.stop();
    }
    setActiveConversationId(null);
    setNewSessionMode(null);
  };

  const beginRenameConversation = (conversation: ConversationSummary) => {
    setPendingDeleteConversationId(null);
    setEditingConversationId(conversation.id);
    setEditingTitle(conversationDisplayTitle(conversation, conversationHistory));
  };

  const saveRenameConversation = (conversationId: string) => {
    const title = sanitizeConversationTitle(editingTitle);
    updateConversationHistory((current) => {
      const titles = { ...current.titles };
      if (title) {
        titles[conversationId] = title;
      } else {
        delete titles[conversationId];
      }
      return { ...current, titles };
    });
    setEditingConversationId(null);
    setEditingTitle("");
  };

  const cancelRenameConversation = () => {
    setEditingConversationId(null);
    setEditingTitle("");
  };

  const requestDeleteConversation = (conversationId: string) => {
    setEditingConversationId(null);
    setPendingDeleteConversationId(conversationId);
  };

  const confirmDeleteConversation = (conversationId: string) => {
    setDeletingConversationId(conversationId);
    setConversationError(null);
    void client.closeConversation(conversationId, {
      reason: "Removed from the flight demo history list.",
    }).then(() => {
      updateConversationHistory((current) => ({
        ...current,
        deletedIds: current.deletedIds.includes(conversationId)
          ? current.deletedIds
          : [...current.deletedIds, conversationId],
      }));
      setPendingDeleteConversationId(null);
      if (activeConversationId === conversationId) {
        if (voice.status === "connected") voice.stop();
        setActiveConversationId(null);
        setNewSessionMode(null);
      }
      void refreshConversations();
    }).catch((error) => {
      setConversationError(error instanceof Error ? error.message : "Failed to delete conversation.");
    }).finally(() => {
      setDeletingConversationId(null);
    });
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
        <ul className="demo-conversation-list">
          {visibleConversations.map((conversation) => (
            <ConversationHistoryRow
              key={conversation.id}
              title={conversationDisplayTitle(conversation, conversationHistory)}
              meta={formatConversationMeta(conversation)}
              active={conversation.id === activeConversationId}
              editing={editingConversationId === conversation.id}
              editingTitle={editingTitle}
              pendingDelete={pendingDeleteConversationId === conversation.id}
              deleting={deletingConversationId === conversation.id}
              onSelect={() => selectConversation(conversation.id)}
              onStartRename={() => beginRenameConversation(conversation)}
              onEditingTitleChange={setEditingTitle}
              onSaveRename={() => saveRenameConversation(conversation.id)}
              onCancelRename={cancelRenameConversation}
              onRequestDelete={() => requestDeleteConversation(conversation.id)}
              onConfirmDelete={() => confirmDeleteConversation(conversation.id)}
              onCancelDelete={() => setPendingDeleteConversationId(null)}
            />
          ))}
          {visibleConversations.length === 0 ? <span className="demo-empty">No conversations yet</span> : null}
        </ul>
        {conversationError ? <span className="demo-sidebar-error">{conversationError}</span> : null}
      </aside>
      <section className={panelClassName}>
        {showSessionPicker ? (
          <SessionModePicker
            voiceStatus={voice.status}
            chatStarting={chatStarting}
            onStartChat={startChatSession}
            onStartVoice={startVoiceSession}
          />
        ) : (
          <>
            {sessionMode === "voice" ? (
              <VoiceBar
                voice={voice}
                canChangeMode={!visibleConversationId}
                onStartVoice={startVoiceSession}
                onChangeMode={returnToSessionPicker}
              />
            ) : null}
            {hasChannelStatus ? (
              <div className="demo-status-row">
                {discordConnection ? <ChannelStatusBadge status={discordConnection} tone="discord" /> : null}
                {emailSwitchStatus ? <ChannelStatusBadge status={emailSwitchStatus} tone="email" /> : null}
              </div>
            ) : null}
            {sessionMode === "voice" && !visibleConversationId ? (
              <VoiceStartStage voice={voice} />
            ) : (
              <ChatSession
                activeConversationId={visibleConversationId}
                client={client}
                sessionMode={sessionMode}
                widgets={chatWidgets}
                appearance={chatAppearance}
                onConversationCreated={handleConversationCreated}
                onWidgetSubmit={handleWidgetSubmit}
              />
            )}
          </>
        )}
      </section>
    </main>
  );
}

function ConversationHistoryRow(props: {
  title: string;
  meta: string;
  active: boolean;
  editing: boolean;
  editingTitle: string;
  pendingDelete: boolean;
  deleting: boolean;
  onSelect: () => void;
  onStartRename: () => void;
  onEditingTitleChange: (value: string) => void;
  onSaveRename: () => void;
  onCancelRename: () => void;
  onRequestDelete: () => void;
  onConfirmDelete: () => void;
  onCancelDelete: () => void;
}) {
  const handleRenameKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") props.onCancelRename();
  };
  return (
    <li className={`demo-conversation-row${props.active ? " is-active" : ""}${props.pendingDelete ? " is-confirming-delete" : ""}`}>
      {props.editing ? (
        <form
          className="demo-conversation-rename"
          onSubmit={(event) => {
            event.preventDefault();
            props.onSaveRename();
          }}
        >
          <input
            aria-label={`Rename ${props.title}`}
            autoFocus
            maxLength={80}
            value={props.editingTitle}
            onChange={(event) => props.onEditingTitleChange(event.target.value)}
            onKeyDown={handleRenameKeyDown}
          />
          <button type="submit" className="demo-icon-button is-primary" aria-label="Save conversation name" title="Save">
            <Check size={16} strokeWidth={2.2} aria-hidden="true" />
          </button>
          <button type="button" className="demo-icon-button" aria-label="Cancel rename" title="Cancel" onClick={props.onCancelRename}>
            <X size={16} strokeWidth={2.2} aria-hidden="true" />
          </button>
        </form>
      ) : (
        <>
          <button
            type="button"
            className="demo-conversation-main"
            aria-current={props.active ? "true" : undefined}
            onClick={props.onSelect}
          >
            <span>{props.title}</span>
            <small>{props.meta}</small>
          </button>
          <div className="demo-conversation-actions" aria-label={`Actions for ${props.title}`}>
            {props.pendingDelete ? (
              <>
                <span>{props.deleting ? "Deleting" : "Delete?"}</span>
                <button type="button" className="demo-icon-button is-danger" aria-label="Confirm delete" title="Confirm delete" disabled={props.deleting} onClick={props.onConfirmDelete}>
                  <Check size={16} strokeWidth={2.2} aria-hidden="true" />
                </button>
                <button type="button" className="demo-icon-button" aria-label="Cancel delete" title="Cancel" disabled={props.deleting} onClick={props.onCancelDelete}>
                  <X size={16} strokeWidth={2.2} aria-hidden="true" />
                </button>
              </>
            ) : (
              <>
                <button type="button" className="demo-icon-button" aria-label="Rename conversation" title="Rename" onClick={props.onStartRename}>
                  <Pencil size={15} strokeWidth={2.2} aria-hidden="true" />
                </button>
                <button type="button" className="demo-icon-button is-danger" aria-label="Delete conversation" title="Delete" onClick={props.onRequestDelete}>
                  <Trash2 size={15} strokeWidth={2.2} aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        </>
      )}
    </li>
  );
}

function SessionModePicker(props: {
  voiceStatus: string;
  chatStarting: boolean;
  onStartChat: () => void;
  onStartVoice: () => void;
}) {
  return (
    <section className="demo-session-picker" aria-label="New session type">
      <div className="demo-session-heading">
        <span>New session</span>
        <strong>Choose how to start</strong>
      </div>
      <div className="demo-mode-grid">
        <button className="demo-mode-card" type="button" disabled={props.chatStarting} onClick={props.onStartChat}>
          <span>Chat</span>
          <strong>{props.chatStarting ? "Starting chat" : "Text support"}</strong>
        </button>
        <button className="demo-mode-card demo-mode-card-primary" type="button" onClick={props.onStartVoice}>
          <span>Voice</span>
          <strong>Voice support</strong>
          <small>{formatVoiceStatus(props.voiceStatus)}</small>
        </button>
      </div>
    </section>
  );
}

function VoiceBar(props: {
  voice: UseVoiceResult;
  canChangeMode: boolean;
  onStartVoice: () => void;
  onChangeMode: () => void;
}) {
  const busy = props.voice.status === "requestingPermission" || props.voice.status === "connecting";
  return (
    <div className="demo-voice-bar">
      <div>
        <strong>Voice</strong>
        <span>{formatVoiceStatus(props.voice.status)}</span>
      </div>
      <div className="demo-voice-actions">
        {props.voice.status === "connected" ? (
          <button type="button" onClick={props.voice.stop}>End</button>
        ) : (
          <button type="button" disabled={busy} onClick={props.onStartVoice}>
            Start
          </button>
        )}
        <button type="button" disabled={!props.voice.localStream} onClick={() => props.voice.setMuted(!props.voice.muted)}>
          {props.voice.muted ? "Unmute" : "Mute"}
        </button>
        {props.canChangeMode ? <button type="button" onClick={props.onChangeMode}>Change</button> : null}
      </div>
      {props.voice.error ? <span className="demo-voice-error">{props.voice.error.message}</span> : null}
    </div>
  );
}

function ChannelStatusBadge({ status, tone }: {
  status: DiscordConnectionStatus | EmailSwitchStatus;
  tone: "discord" | "email";
}) {
  const state = "state" in status && status.state ? ` is-${status.state}` : "";
  return (
    <div className={`demo-channel-status is-${tone}${state}`} role="status" aria-label={`${status.label}: ${status.detail}`}>
      <span className="demo-channel-status-dot" aria-hidden="true" />
      <strong>{status.label}</strong>
      {"url" in status && status.url
        ? <a href={status.url} target="_blank" rel="noreferrer">{status.detail}</a>
        : <span>{status.detail}</span>}
    </div>
  );
}

function ChatSession(props: {
  activeConversationId: string | null;
  client: CognideskClient;
  sessionMode: SessionMode | null;
  widgets: { confirmation: typeof ConfirmationWidget };
  appearance: {
    variables: Record<string, string>;
  };
  onConversationCreated: (conversationId: string) => void;
  onWidgetSubmit: (args: { promptId: string; kind: string; output: unknown }) => Promise<void>;
}) {
  return (
    <div className="demo-chat-session">
      <ChatWidget
        client={props.client}
        agentId={agentId}
        {...(props.activeConversationId ? { conversationId: props.activeConversationId } : { channel: "chat" as const })}
        title={props.sessionMode === "voice" ? "Flight support transcript" : "Flight support"}
        placeholder="Ask about booking, ticket status, or flight info"
        widgets={props.widgets}
        onConversationCreated={props.onConversationCreated}
        onWidgetSubmit={(args) => {
          void props.onWidgetSubmit(args);
        }}
        appearance={props.appearance}
      />
    </div>
  );
}

function VoiceStartStage({ voice }: { voice: UseVoiceResult }) {
  const status = formatVoiceStatus(voice.status);
  return (
    <section className="demo-voice-stage" aria-label="Voice session status">
      <span>Voice session</span>
      <strong>{voice.status === "connected" ? "Listening" : status}</strong>
      <p>{voice.error ? voice.error.message : "Microphone connection is prepared before the transcript appears."}</p>
    </section>
  );
}

function createFlightChatStart(input: { returningCustomer: boolean; locale?: string }): ChatStartAction {
  const german = isGermanLocale(input.locale);
  return {
    type: "message",
    text: german
      ? input.returningCustomer
        ? "Willkommen zurück. Wie kann ich heute bei Flügen helfen — Flugsuche, Fluginfos, Ticketstatus oder Übergabe an einen Menschen?"
        : "Grüß Sie. Wie kann ich heute bei Flügen helfen — Flugsuche, Fluginfos, Ticketstatus oder Übergabe an einen Menschen?"
      : input.returningCustomer
        ? "Welcome back. How can I help with flights today — search options, flight info, ticket status, or a human handoff?"
        : "Hi! How can I help with flights today — search options, flight info, ticket status, or a human handoff?",
    visibleToModel: true,
  };
}

function isGermanLocale(locale: string | undefined) {
  return locale?.toLowerCase().startsWith("de") ?? false;
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

function conversationDisplayTitle(conversation: ConversationSummary, history: ConversationHistoryPrefs) {
  return history.titles[conversation.id] ?? formatConversationTitle(conversation);
}

function sanitizeConversationTitle(value: string) {
  return value.trim().replace(/\s+/g, " ").slice(0, 80);
}

function loadConversationHistoryPrefs(): ConversationHistoryPrefs {
  if (typeof window === "undefined") return emptyConversationHistoryPrefs();
  try {
    return normalizeConversationHistoryPrefs(JSON.parse(window.localStorage.getItem(conversationHistoryStorageKey) ?? "{}"));
  } catch {
    return emptyConversationHistoryPrefs();
  }
}

function saveConversationHistoryPrefs(history: ConversationHistoryPrefs) {
  try {
    window.localStorage.setItem(conversationHistoryStorageKey, JSON.stringify(history));
  } catch {
    // Local history actions are best-effort in private or restricted browser modes.
  }
}

function normalizeConversationHistoryPrefs(value: unknown): ConversationHistoryPrefs {
  if (!isRecord(value)) return emptyConversationHistoryPrefs();
  const titles = isRecord(value.titles)
    ? Object.fromEntries(Object.entries(value.titles)
      .flatMap(([id, title]) => typeof title === "string" && sanitizeConversationTitle(title)
        ? [[id, sanitizeConversationTitle(title)]]
        : []))
    : {};
  const deletedIds = Array.isArray(value.deletedIds)
    ? [...new Set(value.deletedIds.filter((id): id is string => typeof id === "string" && id.length > 0))]
    : [];
  return { titles, deletedIds };
}

function emptyConversationHistoryPrefs(): ConversationHistoryPrefs {
  return { titles: {}, deletedIds: [] };
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

function conversationSessionMode(conversation: ConversationSummary | null): SessionMode | null {
  if (!conversation) return null;
  const { channel } = conversation;
  if (channel && typeof channel === "object" && channel.kind === "voice") return "voice";
  return "chat";
}

function getDiscordConnectionStatus(
  conversation: ConversationSummary | null,
  events: RuntimeEvent[],
  gatewayReady: boolean,
): DiscordConnectionStatus | null {
  if (!gatewayReady) return null;
  const voiceChannel = discordVoiceChannelFromEvents(events);
  if (voiceChannel) {
    return {
      label: "Discord voice room",
      detail: voiceChannel.id ? `Room ${shortId(voiceChannel.id)}` : "Open room",
      ...(voiceChannel.url ? { url: voiceChannel.url } : {}),
    };
  }
  const threadId = discordThreadIdFromChannel(conversation?.channel) ?? discordThreadIdFromEvents(events);
  if (threadId) {
    return {
      label: "Discord connected",
      detail: `Thread ${shortId(threadId)}`,
    };
  }
  if (events.some(eventHasDiscordEvidence)) {
    return {
      label: "Discord connected",
      detail: "Thread linked",
    };
  }
  return null;
}

function parseDiscordGatewayStatus(value: unknown): DiscordGatewayStatus | null {
  if (!isRecord(value)) return null;
  return {
    enabled: value.enabled === true,
    ready: value.ready === true,
  };
}

function getEmailSwitchStatus(events: RuntimeEvent[]): EmailSwitchStatus | null {
  for (const event of [...events].reverse()) {
    if (event.type !== flightEmailSwitchStatusEvent || !isRecord(event.data)) continue;
    if (event.data.status === "waiting_for_reply") {
      const recipientEmail = typeof event.data.recipientEmail === "string"
        ? event.data.recipientEmail
        : typeof event.data.accountEmail === "string"
          ? event.data.accountEmail
          : "email";
      return {
        label: "Email check",
        detail: `Awaiting reply from ${recipientEmail}`,
        state: "waiting",
      };
    }
    if (event.data.status === "verified") {
      return {
        label: "Email verified",
        detail: "Workflow resumed",
        state: "verified",
      };
    }
    if (event.data.status === "sent" || event.data.status === "prepared") {
      const recipientEmail = typeof event.data.recipientEmail === "string"
        ? event.data.recipientEmail
        : typeof event.data.accountEmail === "string"
          ? event.data.accountEmail
          : "email";
      return {
        label: "Secure email",
        detail: `Sent to ${recipientEmail}`,
        state: "sent",
      };
    }
    if (event.data.status === "failed") {
      return {
        label: "Email failed",
        detail: event.data.reasonCode === "smtp-not-configured" ? "SMTP not configured" : "Send failed",
        state: "failed",
      };
    }
  }
  return null;
}

function discordVoiceChannelFromEvents(events: RuntimeEvent[]) {
  for (const event of [...events].reverse()) {
    if (event.type !== flightDiscordHandoffStatusEvent || !isRecord(event.data)) continue;
    const id = typeof event.data.discordVoiceChannelId === "string" ? event.data.discordVoiceChannelId : undefined;
    const url = typeof event.data.discordVoiceChannelUrl === "string" ? event.data.discordVoiceChannelUrl : undefined;
    if (id || url) return { id, url };
  }
  return null;
}

function discordThreadIdFromEvents(events: RuntimeEvent[]) {
  for (const event of [...events].reverse()) {
    if (event.type === flightDiscordHandoffStatusEvent && isRecord(event.data) && typeof event.data.discordThreadId === "string") {
      return event.data.discordThreadId;
    }
    const channel = channelFromRuntimeEvent(event);
    const threadId = discordThreadIdFromChannel(channel);
    if (threadId) return threadId;
  }
  return null;
}

function eventHasDiscordEvidence(event: RuntimeEvent) {
  const channel = channelFromRuntimeEvent(event);
  return isDiscordChannel(channel);
}

function channelFromRuntimeEvent(event: RuntimeEvent): unknown {
  if (!isRecord(event.data)) return null;
  if ("channel" in event.data) return event.data.channel;
  return null;
}

function isDiscordChannel(channel: unknown): channel is Record<string, unknown> {
  return isRecord(channel) && channel.provider === "discord";
}

function discordThreadIdFromChannel(channel: unknown) {
  if (!isDiscordChannel(channel)) return null;
  if (typeof channel.externalThreadId === "string") return channel.externalThreadId;
  if (typeof channel.metadata === "object" && channel.metadata && "discordThreadId" in channel.metadata) {
    const threadId = (channel.metadata as Record<string, unknown>).discordThreadId;
    if (typeof threadId === "string") return threadId;
  }
  return null;
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

import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import type { RuntimeEvent } from "@cognidesk/core";
import { ChatWidget, createCognideskClient, type WidgetRendererProps } from "@cognidesk/react";
import "@cognidesk/ui/styles.css";
import "streamdown/styles.css";
import "./styles.css";

function App() {
  const [conversationId, setConversationId] = useState<string | null>(null);
  const client = useMemo(() => createCognideskClient({
    baseUrl: import.meta.env.VITE_COGNIDESK_API_URL ?? "http://localhost:8787/api",
  }), []);

  const handleWidgetSubmit = async (args: { promptId: string; kind: string; output: unknown }) => {
    if (!conversationId) return;
    const { events } = await client.listEvents(conversationId);
    if (
      args.kind === "confirmation"
      && args.promptId === "confirm:book-flight:book:bookFlight"
      && isConfirmed(args.output)
    ) {
      const booking = [...events].reverse().find(isSuccessfulBookingEvent);
      const result = booking?.data.result;
      if (!isRecord(result) || typeof result.bookingReference !== "string") return;
      await client.emitIntermediateMessage(conversationId, {
        text: `Mock booking confirmed. Booking reference: **${result.bookingReference}**.`,
      });
      return;
    }
    if (isRoutePrompt(args.promptId)) {
      const search = [...events].reverse().find(isSuccessfulSearchEvent);
      const searchResult = search?.data.result;
      if (isRecord(searchResult) && Array.isArray(searchResult.flights)) {
        if (searchResult.flights.length > 0) {
          await client.emitIntermediateMessage(conversationId, {
            text: `${formatFlights(searchResult.flights)}\n\nChoose a flight number to continue.`,
          });
          return;
        }
        const suggestions = [...events].reverse().find(isSuccessfulSuggestionEvent);
        const suggestionResult = suggestions?.data.result;
        await client.emitIntermediateMessage(conversationId, {
          text: formatNoFlights(searchResult, suggestionResult),
        });
      }
    }
  };

  return (
    <main className="demo-shell">
      <section className="demo-panel">
        <ChatWidget
          client={client}
          agentId="flight-service"
          title="Flight support"
          placeholder="Ask about booking, ticket status, or flight info"
          widgets={{ confirmation: ConfirmationWidget }}
          onConversationCreated={setConversationId}
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
  return (
    <div className="demo-confirmation">
      <strong>{input.title ?? "Confirm"}</strong>
      <span>{input.message ?? "Continue?"}</span>
      <div className="demo-confirmation-actions">
        <button className="demo-confirmation-primary" type="button" disabled={props.disabled} onClick={() => props.submit({ confirmed: true })}>{input.confirmLabel ?? "Confirm"}</button>
        <button type="button" disabled={props.disabled} onClick={() => props.submit({ confirmed: false })}>{input.cancelLabel ?? "Cancel"}</button>
      </div>
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

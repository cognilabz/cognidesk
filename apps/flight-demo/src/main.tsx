import { StrictMode, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { ChatWidget, createCognideskClient, type WidgetRendererProps } from "@cognidesk/react";
import "@cognidesk/ui/styles.css";
import "./styles.css";

function App() {
  const client = useMemo(() => createCognideskClient({
    baseUrl: import.meta.env.VITE_COGNIDESK_API_URL ?? "http://localhost:8787/api",
  }), []);

  return (
    <main className="demo-shell">
      <section className="demo-panel">
        <ChatWidget
          client={client}
          agentId="flight-service"
          title="Flight support"
          placeholder="Ask about booking, ticket status, or flight info"
          widgets={{ confirmation: ConfirmationWidget }}
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

function ConfirmationWidget(props: WidgetRendererProps) {
  const input = props.input as { title?: string; message?: string };
  return (
    <div className="demo-confirmation">
      <strong>{input.title ?? "Confirm"}</strong>
      <span>{input.message ?? "Continue?"}</span>
      <div className="demo-confirmation-actions">
        <button type="button" onClick={() => props.submit({ confirmed: true })}>Confirm</button>
        <button type="button" onClick={() => props.submit({ confirmed: false })}>Cancel</button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

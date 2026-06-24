import type { AgentModelSet, ModelAdapter, ModelMessage } from "@cognidesk/core";
import type { FlightDemoExternalIntegrationJourneyFlags } from "../../config.js";

export interface LocalDemoModelSetOptions {
  externalIntegrationJourneysEnabled?: boolean | Partial<FlightDemoExternalIntegrationJourneyFlags>;
}

export function createLocalDemoModelSet(options: LocalDemoModelSetOptions = {}): AgentModelSet {
  const response: ModelAdapter = {
    provider: "flight-demo-local",
    model: "deterministic-support-demo",
    generateText: async ({ role, messages }) => {
      if (role === "matcher") return createLocalMatcher(messages);
      if (role === "extraction") return createLocalExtraction(messages);
      if (role === "citationPostProcessing") return createLocalCitationSegments(messages);
      if (role === "compaction") return createLocalCompaction(messages);
      return {
        text: createLocalAnswer(messages, options),
        usage: localUsage(messages),
      };
    },
  };
  const embedding: ModelAdapter = {
    provider: "flight-demo-local",
    model: "keyword-embedding",
    generateText: response.generateText,
    embed: async ({ text }) => {
      const embedding = keywordEmbedding(text);
      return {
        embedding,
        model: "keyword-embedding",
        dimensions: embedding.length,
      };
    },
  };
  return {
    response,
    matcher: response,
    extraction: response,
    citationPostProcessing: response,
    compaction: response,
    journeyEmbedding: embedding,
  };
}

function createLocalMatcher(messages: ModelMessage[]) {
  const prompt = messages.map((message) => message.content).join("\n").toLowerCase();
  const latestUser = extractLatestUserMessage(prompt);
  if (prompt.includes("state transition candidates")) {
    const candidates = [];
    const mentionsAvailableFlights = prompt.includes("availableflights");
    const hasNoFlights = mentionsAvailableFlights && prompt.includes("[]");
    if (prompt.includes("state: noflights") && (latestUser.includes("cheaper") || latestUser.includes("cheapest") || /\bcl\d{3}\b/i.test(latestUser))) {
      candidates.push({ id: "transition_1", confidence: 0.95, reason: "Customer selected an alternative." });
    } else if (prompt.includes("targetid: noflights") && hasNoFlights) {
      candidates.push({ id: "transition_2", confidence: 0.95, reason: "No mocked flights are available." });
    } else if (prompt.includes("targetid: selectflight") && mentionsAvailableFlights && !hasNoFlights) {
      candidates.push({ id: "transition_1", confidence: 0.95, reason: "Mocked flights are available." });
    } else if (latestUser.match(/\bcd-[a-z0-9-]+-\d{4}\b/i) || latestUser.includes("booking")) {
      candidates.push({ id: "transition_1", confidence: 0.9, reason: "Booking reference is present." });
    } else if (latestUser.match(/\bcl\d{3}\b/i)) {
      candidates.push({ id: "transition_2", confidence: 0.9, reason: "Flight number is present." });
    }
    const structured = { candidates };
    return { text: JSON.stringify(structured), structured };
  }

  const candidates = [];
  const whatsappIntent = latestUser.includes("whatsapp") || latestUser.includes("whats app");
  const mentionsBaggage = /\b(bag|bags|baggage|luggage|suitcase|sports equipment|skis|oversized|stroller|wheelchair)\b/.test(latestUser);
  const baggageIntent = mentionsBaggage
    && (
      /\b(add|order|buy|purchase|more|extra|eligib|check|upgrade|pay|second|checked|lost|missing|damaged|delayed|claim|arrive|arrived)\b/.test(latestUser)
      || latestUser.includes("did not arrive")
    );
  const refundStatusIntent = latestUser.includes("refund status")
    || latestUser.includes("refund details")
    || latestUser.includes("refund for booking")
    || latestUser.includes("refund on booking");
  const secureAccountIntent = (
    latestUser.includes("boarding pass")
    || latestUser.includes("e-ticket")
    || latestUser.includes("eticket")
    || latestUser.includes("invoice")
    || latestUser.includes("receipt")
    || refundStatusIntent
    || latestUser.includes("compensation")
    || latestUser.includes("payment confirmation")
    || latestUser.includes("passenger name")
    || latestUser.includes("change the date")
    || latestUser.includes("resend")
    || latestUser.includes("account profile")
  );
  const handoffIntent = /\b(human|person|agent|urgent|angry|stranded|missed connection|wheelchair|accessibility|medical|unaccompanied minor)\b/.test(latestUser);
  const hasFlightIdentifier = /\bcl\d{3}\b/i.test(latestUser) || /\bcd-[a-z0-9-]+-\d{4}\b/i.test(latestUser);
  const statusIntent = !whatsappIntent && !baggageIntent && !secureAccountIntent && !handoffIntent
    && (
      latestUser.includes("status of booking")
      || latestUser.includes("booking status")
      || latestUser.includes("where is my ticket")
      || latestUser.includes("where is my booking")
      || latestUser.includes("can i check in")
      || latestUser.includes("can i check-in")
      || latestUser.includes("check in for")
      || latestUser.includes("check-in for")
      || latestUser.includes("flight status")
      || (hasFlightIdentifier && /\b(status|check in|check-in|gate|boarding|delayed|cancelled|canceled)\b/.test(latestUser))
    );
  const bookingIntent = /\b(book|find flights|search for a flight|replacement flight|rebook|ticket to|flight to)\b/.test(latestUser);

  if (prompt.includes("whatsapp-customer-message") && whatsappIntent) {
    candidates.push({ journeyId: "whatsapp-customer-message", confidence: 0.97, reason: "WhatsApp delivery requested." });
  }
  if (prompt.includes("human-handoff") && handoffIntent) {
    candidates.push({ journeyId: "human-handoff", confidence: 0.95, reason: "Human support requested." });
  }
  if (prompt.includes("baggage-service") && baggageIntent) {
    candidates.push({ journeyId: "baggage-service", confidence: 0.94, reason: "Baggage service action requested." });
  }
  if (prompt.includes("secure-email-login") && secureAccountIntent) {
    candidates.push({ journeyId: "secure-email-login", confidence: 0.93, reason: "Account-protected request." });
  }
  if (prompt.includes("ticket-status") && statusIntent) {
    candidates.push({ journeyId: "ticket-status", confidence: 0.9, reason: "Status request." });
  }
  if (prompt.includes("book-flight") && bookingIntent && !statusIntent && !baggageIntent) {
    candidates.push({ journeyId: "book-flight", confidence: 0.9, reason: "Flight shopping or booking request." });
  }
  const structured = { candidates };
  return { text: JSON.stringify(structured), structured };
}

function createLocalExtraction(messages: ModelMessage[]) {
  const system = messages.find((message) => message.role === "system")?.content ?? "";
  const user = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const lower = user.toLowerCase();
  const values: Record<string, unknown> = {};
  const wants = (path: string) => system.includes(path);
  const route = lower.match(/from\s+([a-z\s]+?)\s+to\s+([a-z\s]+?)(?:\s+today|\s+tomorrow|\s+on\s+\d{4}-\d{2}-\d{2}|\.|$)/i);
  const routeWithoutFrom = lower.match(/\b(vienna|berlin|paris)\s+to\s+(vienna|berlin|paris)(?:\s+today|\s+tomorrow|\s+on\s+\d{4}-\d{2}-\d{2}|\.|$)/i);
  if (wants("origin") && route?.[1]) values.origin = titleCase(route[1].trim());
  if (wants("origin") && !values.origin && routeWithoutFrom?.[1]) values.origin = titleCase(routeWithoutFrom[1]);
  if (wants("destination") && route?.[2]) values.destination = titleCase(route[2].trim());
  if (wants("destination") && !values.destination && routeWithoutFrom?.[2]) values.destination = titleCase(routeWithoutFrom[2]);
  if (wants("departureDate")) {
    const isoDate = user.match(/\b20\d{2}-\d{2}-\d{2}\b/)?.[0];
    if (isoDate) values.departureDate = isoDate;
    if (lower.includes("tomorrow")) values.departureDate = "2026-05-27";
    if (lower.includes("today")) values.departureDate = "2026-05-26";
  }
  const passenger = user.match(/(?:for|passenger)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
  if (wants("passengerName") && passenger?.[1]) values.passengerName = passenger[1];
  const bookingReference = user.match(/\b(?:CD-[A-Z0-9-]+|ABC\d{3,})\b/i)?.[0];
  if (wants("bookingReference") && bookingReference) values.bookingReference = bookingReference.toUpperCase();
  const accountEmail = user.match(/[^\s@]+@[^\s@]+\.[^\s@.,;:!?]+/)?.[0];
  if (wants("accountEmail") && accountEmail) values.accountEmail = accountEmail;
  const recipientPhone = user.match(/\+\d[\d\s().-]{5,}\d/)?.[0]
    ?? user.match(/(?:whatsapp|to)\s+(\d[\d\s().-]{5,}\d)/i)?.[1];
  if (wants("recipientPhone") && recipientPhone) values.recipientPhone = recipientPhone;
  if (wants("messagePurpose")) {
    if (lower.includes("verification") || lower.includes("verify")) values.messagePurpose = "verification-link";
    else if (lower.includes("confirmation") || lower.includes("confirm") || lower.includes("bestatig") || lower.includes("bestaetig")) values.messagePurpose = "confirmation-link";
    else if (lower.includes("notification") || lower.includes("notify")) values.messagePurpose = "notification";
  }
  if (wants("requestType")) {
    if (lower.includes("boarding pass")) values.requestType = "boarding pass delivery";
    else if (lower.includes("e-ticket") || lower.includes("eticket")) values.requestType = "e-ticket delivery";
    else if (lower.includes("passenger name")) values.requestType = "passenger-name correction";
    else if (lower.includes("invoice") || lower.includes("receipt")) values.requestType = "invoice or receipt request";
    else if (lower.includes("refund") || lower.includes("compensation")) values.requestType = "refund or compensation status request";
    else if (lower.includes("payment confirmation")) values.requestType = "payment-confirmation follow-up";
    else if (lower.includes("change the date")) values.requestType = "date-change request";
  }
  if (wants("requestLabel")) {
    if (lower.includes("gate")) values.requestLabel = "gate-change notification";
    else if (lower.includes("rebook")) values.requestLabel = "rebooking confirmation";
    else if (lower.includes("check-in") || lower.includes("check in")) values.requestLabel = "check-in reminder";
    else if (lower.includes("boarding pass")) values.requestLabel = "boarding-pass link";
    else if (lower.includes("bag")) values.requestLabel = "baggage-claim update";
    else if (lower.includes("refund")) values.requestLabel = "refund-status update";
  }
  const flightNumber = user.match(/\bCL\d{3}\b/i)?.[0];
  if (wants("flightNumber") && flightNumber) values.flightNumber = flightNumber.toUpperCase();
  if (wants("selectedFlightId") && flightNumber) values.selectedFlightId = flightNumber.toUpperCase();
  const structured = { values };
  return { text: JSON.stringify(structured), structured };
}

function createLocalCitationSegments(messages: ModelMessage[]) {
  const user = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const answer = user.split("Assistant answer:\n").at(-1)?.trim() ?? "";
  const structured = {
    segments: answer ? [{ text: answer, knowledgeIds: [] }] : [],
  };
  return { text: JSON.stringify(structured), structured };
}

function createLocalCompaction(messages: ModelMessage[]) {
  const structured = {
    summary: messages.at(-1)?.content.slice(0, 240) ?? "No conversation events.",
    stableFacts: [],
    openQuestions: [],
    activeCommitments: [],
  };
  return { text: JSON.stringify(structured), structured };
}

function createLocalAnswer(messages: ModelMessage[], options: LocalDemoModelSetOptions) {
  const externalIntegrationJourneysEnabled = resolveExternalIntegrationJourneyFlags(
    options.externalIntegrationJourneysEnabled,
  );
  const system = messages.find((message) => message.role === "system")?.content.toLowerCase() ?? "";
  const user = [...messages].reverse().find((message) => message.role === "user")?.content.toLowerCase() ?? "";
  const transcript = messages.map((message) => message.content).join("\n").toLowerCase();
  if (user.includes("whatsapp")) {
    if (!externalIntegrationJourneysEnabled.whatsapp) {
      return "Live WhatsApp delivery is disabled in this local demo. Set FLIGHT_DEMO_WHATSAPP_JOURNEY=true with the WhatsApp credentials to enable that Journey.";
    }
    return "I can send a WhatsApp verification link, confirmation link, or notification after you provide the number and approve the send.";
  }
  if (/\b(human|person|agent|urgent|angry|stranded|missed connection|wheelchair|accessibility|medical)\b/.test(user)) {
    if (!externalIntegrationJourneysEnabled.discordHandoff) {
      return "Live human handoff is disabled in this local demo. I can still help with mocked flight status, disruption policy, baggage rules, and check-in questions here.";
    }
    return "I can prepare a short handoff summary for an airline support teammate.";
  }
  if (/\b(lost|missing|damaged|delayed)\b/.test(user) && /\b(bag|baggage|luggage)\b/.test(user)) {
    if (!externalIntegrationJourneysEnabled.discordHandoff) {
      return "For delayed, lost, or damaged baggage I can explain the policy and collect the key details here, but live handoff is disabled in this local demo.";
    }
    return "For delayed, lost, or damaged baggage I can collect a short summary and prepare a human handoff. Do not share payment or passport details here.";
  }
  if (/\b(bag|bags|baggage|luggage|suitcase|sports equipment)\b/.test(user)) {
    return "Economy Light includes one cabin bag. This demo can explain baggage policy, but cannot purchase add-ons or verify eligibility for a live booking.";
  }
  if (user.includes("boarding pass") || user.includes("e-ticket") || user.includes("invoice") || user.includes("receipt") || user.includes("refund status") || user.includes("refund details") || user.includes("compensation") || user.includes("payment confirmation") || user.includes("passenger name") || user.includes("change the date")) {
    if (!externalIntegrationJourneysEnabled.secureEmail) {
      return "That is account-protected airline support. Secure email login is disabled in this local demo; set FLIGHT_DEMO_SECURE_EMAIL_JOURNEY=true with SMTP/IMAP credentials to enable it.";
    }
    return "That is account-protected airline support. I can prepare a secure email continuation and will not ask for passwords or one-time codes in chat.";
  }
  if (system.includes('"availableflights":[]')) {
    return "There are no mocked flights for that route and date. I can suggest available mocked alternatives or check another date.";
  }
  if (user.includes("status") || user.includes("check-in") || user.includes("check in") || user.includes("gate") || user.includes("boarding") || user.includes("delayed")) {
    return "Your mocked ticket is confirmed. Check-in opens 24 hours before departure, and gate timing can change close to departure.";
  }
  if (transcript.includes("mock booking confirmed") && /\b(cool|thanks|thank you|ok|okay|great)\b/.test(user)) {
    return "You're all set. The mocked booking is already confirmed.";
  }
  if (/\bbook\b/.test(user) || user.includes("replacement flight") || user.includes("rebook") || user.includes("ticket to") || user.includes("flight to")) {
    return "I can help search and book a mocked flight. Share origin, destination, date, and passenger name.";
  }
  if (!hasAnyExternalIntegrationJourney(externalIntegrationJourneysEnabled)) {
    return "I can help with flight shopping, ticket status, check-in, baggage, and disruption policy questions in this local demo.";
  }
  return `I can help with flight shopping, ticket status, check-in, baggage, disruption questions${createEnabledExternalSuffix(externalIntegrationJourneysEnabled)}.`;
}

function resolveExternalIntegrationJourneyFlags(
  option: LocalDemoModelSetOptions["externalIntegrationJourneysEnabled"],
): FlightDemoExternalIntegrationJourneyFlags {
  if (typeof option === "boolean") {
    return {
      secureEmail: option,
      discordHandoff: option,
      whatsapp: option,
    };
  }
  return {
    secureEmail: option?.secureEmail === true,
    discordHandoff: option?.discordHandoff === true,
    whatsapp: option?.whatsapp === true,
  };
}

function hasAnyExternalIntegrationJourney(flags: FlightDemoExternalIntegrationJourneyFlags) {
  return flags.secureEmail || flags.discordHandoff || flags.whatsapp;
}

function createEnabledExternalSuffix(flags: FlightDemoExternalIntegrationJourneyFlags) {
  const items = [
    ...(flags.secureEmail ? ["secure account requests"] : []),
    ...(flags.whatsapp ? ["WhatsApp notifications"] : []),
    ...(flags.discordHandoff ? ["human handoff"] : []),
  ];
  if (items.length === 0) return "";
  if (items.length === 1) return `, and ${items[0]}`;
  if (items.length === 2) return `, ${items[0]}, and ${items[1]}`;
  return `, ${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

function keywordEmbedding(text: string) {
  const lower = text.toLowerCase();
  const canonicalJourneyEmbedding = canonicalJourneyKeywordEmbedding(lower);
  if (canonicalJourneyEmbedding) return canonicalJourneyEmbedding;
  const bookingSignal = /\bbook\b/.test(lower)
    || lower.includes("find flight")
    || lower.includes("find flights")
    || lower.includes("search for a flight")
    || lower.includes("flight availability")
    || lower.includes("new itinerary")
    || lower.includes("replacement flight")
    || lower.includes("rebook")
    || lower.includes("ticket to")
    || lower.includes("flight to");
  const statusSignal = lower.includes("ticket status")
    || lower.includes("booking status")
    || lower.includes("status of booking")
    || lower.includes("status of flight")
    || lower.includes("e-ticket status")
    || lower.includes("flight status")
    || lower.includes("check-in")
    || lower.includes("check in")
    || lower.includes("where is my ticket")
    || lower.includes("where is my booking")
    || lower.includes("gate")
    || lower.includes("boarding");
  const secureSignal = lower.includes("boarding pass")
    || lower.includes("e-ticket")
    || lower.includes("eticket")
    || lower.includes("invoice")
    || lower.includes("receipt")
    || lower.includes("refund status")
    || lower.includes("refund details")
    || lower.includes("compensation")
    || lower.includes("passenger name")
    || lower.includes("payment confirmation")
    || lower.includes("change the date")
    || lower.includes("date change")
    || lower.includes("fare")
    || lower.includes("promo")
    || lower.includes("ticket change")
    || lower.includes("secure email")
    || lower.includes("account");
  return [
    bookingSignal ? 1 : 0,
    statusSignal ? 1 : 0,
    /\bflights?\b/.test(lower) || /\bcl\d{3}\b/.test(lower) ? 1 : 0,
    lower.includes("bag") || lower.includes("luggage") ? 1 : 0,
    lower.includes("human") || lower.includes("handoff") || lower.includes("agent") ? 1 : 0,
    secureSignal ? 1 : 0,
    lower.includes("boarding") || lower.includes("gate") ? 1 : 0,
    lower.includes("check-in") || lower.includes("check in") ? 1 : 0,
    lower.includes("disruption") || lower.includes("cancelled") || lower.includes("delayed") || lower.includes("missed connection") ? 1 : 0,
    lower.includes("email") || lower.includes("login") || lower.includes("account") ? 1 : 0,
    lower.includes("whatsapp") || lower.includes("whats app") ? 1 : 0,
  ];
}

function canonicalJourneyKeywordEmbedding(lower: string) {
  if (lower.includes("journey:book-flight")) return [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
  if (lower.includes("journey:ticket-status")) return [0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0];
  if (lower.includes("journey:baggage-service")) return [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0];
  if (lower.includes("journey:secure-email-login")) return [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0];
  if (lower.includes("journey:whatsapp-customer-message")) return [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  if (lower.includes("journey:human-handoff")) return [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0];
  return null;
}

function extractLatestUserMessage(prompt: string) {
  const jsonValue = prompt.match(/"latestusermessage"\s*:\s*"([^"]*)"/)?.[1];
  if (jsonValue) return jsonValue.replace(/\\"/g, "\"");
  return prompt.match(/latest user message:\s*([^\n]+)/)?.[1] ?? prompt;
}

function localUsage(messages: ModelMessage[]) {
  const inputTokens = messages.reduce((sum, message) => sum + Math.ceil(message.content.length / 4), 0);
  return {
    inputTokens,
    outputTokens: 32,
    totalTokens: inputTokens + 32,
  };
}

function titleCase(value: string) {
  return value.split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part[0]?.toUpperCase() ?? ""}${part.slice(1).toLowerCase()}`)
    .join(" ");
}

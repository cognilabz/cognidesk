import { createHash } from "node:crypto";
import { z } from "zod";
import { tool } from "@cognidesk/core";
import {
  createWhatsAppTextMessage,
  defineWhatsAppMessagingIntegration,
  type WhatsAppApiResponse,
} from "@cognidesk/integration-messaging-whatsapp";
import { flights } from "../data/flights.js";
import { flightSchema } from "../domain/schemas.js";
import {
  FLIGHT_MOCK_BOOKING_CAPABILITY,
  FLIGHT_MOCK_BOOKING_POLICY_ID,
  FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID,
  FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
} from "../policies.js";

const whatsAppMessagePurposeSchema = z.enum(["verification-link", "confirmation-link", "notification"]);

export type FlightWhatsAppMessagePurpose = z.infer<typeof whatsAppMessagePurposeSchema>;

export interface FlightWhatsAppCustomerMessageSendInput {
  to: string;
  body: string;
  purpose: FlightWhatsAppMessagePurpose;
  previewUrl: boolean;
  customerPhone: string;
  recipientOverridden: boolean;
  bookingReference?: string;
  link?: string;
}

export interface FlightWhatsAppCustomerMessageSendResult {
  status: "sent" | "not-configured" | "failed";
  messageId?: string;
  reason?: string;
  missingEnv?: string[];
}

export interface FlightWhatsAppCustomerMessageSender {
  send(input: FlightWhatsAppCustomerMessageSendInput): Promise<FlightWhatsAppCustomerMessageSendResult>;
}

export interface FlightWhatsAppToolOptions {
  configured?: boolean;
  accessToken?: string;
  phoneNumberId?: string;
  appSecret?: string;
  recipientOverride?: string;
  confirmationBaseUrl?: string;
  graphApiBaseUrl?: string;
  graphApiVersion?: string;
  reason?: string;
  missingEnv?: string[];
  sender?: FlightWhatsAppCustomerMessageSender;
}

export interface CreateFlightToolsOptions {
  whatsapp?: FlightWhatsAppToolOptions;
}

export const searchFlights = tool("searchFlights", {
  description: "Search mocked flight inventory.",
  input: z.object({
    origin: z.string(),
    destination: z.string(),
    departureDate: z.string(),
  }),
  output: z.object({ flights: z.array(flightSchema) }),
  execute: async ({ input, telemetry }) => telemetry.withSpan("flight_demo.inventory.search", {
    attributes: {
      "flight_demo.origin": input.origin,
      "flight_demo.destination": input.destination,
      "flight_demo.departure_date": input.departureDate,
    },
  }, (span) => {
    const matches = flights.filter((candidate) => (
      normalizeText(candidate.origin) === normalizeText(input.origin)
        && normalizeText(candidate.destination) === normalizeText(input.destination)
        && candidate.departureTime.slice(0, 10) === input.departureDate.trim()
    ));
    span.setAttribute("flight_demo.match_count", matches.length);
    return { flights: matches };
  }),
});

export const suggestFlightOptions = tool("suggestFlightOptions", {
  description: "List mocked flight alternatives for a route and the whole demo inventory.",
  input: z.object({
    origin: z.string().optional(),
    destination: z.string().optional(),
  }),
  output: z.object({
    routeFlights: z.array(flightSchema),
    allFlights: z.array(flightSchema),
  }),
  execute: async ({ input, telemetry }) => telemetry.withSpan("flight_demo.inventory.suggest_options", {
    attributes: {
      ...(input.origin ? { "flight_demo.origin": input.origin } : {}),
      ...(input.destination ? { "flight_demo.destination": input.destination } : {}),
    },
  }, (span) => {
    const routeFlights = flights.filter((candidate) => (
      (!input.origin || normalizeText(candidate.origin) === normalizeText(input.origin))
        && (!input.destination || normalizeText(candidate.destination) === normalizeText(input.destination))
    ));
    span.setAttribute("flight_demo.route_match_count", routeFlights.length);
    span.setAttribute("flight_demo.inventory_count", flights.length);
    return {
      routeFlights,
      allFlights: [...flights],
    };
  }),
});

export const bookFlight = tool("bookFlight", {
  description: "Create a mocked booking.",
  input: z.object({
    selectedFlightId: z.string(),
    passengerName: z.string(),
    flight: z.string().optional(),
  }),
  output: z.object({
    bookingReference: z.string(),
  }),
  sideEffect: true,
  policy: {
    capability: FLIGHT_MOCK_BOOKING_CAPABILITY,
    changesWorkflow: true,
    requiredPolicyIds: [FLIGHT_MOCK_BOOKING_POLICY_ID],
  },
  idempotencyKey: ({ conversationId, input }) => `${conversationId}:${normalizeFlightId(input.selectedFlightId)}`,
  execute: async ({ input, telemetry }) => telemetry.withSpan("flight_demo.booking.create", {
    attributes: {
      "flight_demo.flight_id": normalizeFlightId(input.selectedFlightId),
    },
  }, () => {
    const selectedFlightId = normalizeFlightId(input.selectedFlightId);
    const flight = flights.find((candidate) => candidate.id === selectedFlightId);
    if (!flight) throw new Error(`Unknown mocked flight '${input.selectedFlightId}'.`);
    if (!input.passengerName.trim()) throw new Error("Passenger name is required.");
    return { bookingReference: `CD-${selectedFlightId}-4821` };
  }),
});

export const getTicketStatus = tool("getTicketStatus", {
  description: "Get mocked ticket status.",
  input: z.object({ bookingReference: z.string() }),
  output: z.object({
    bookingReference: z.string(),
    status: z.enum(["confirmed", "checked-in", "cancelled"]),
    nextStep: z.string(),
  }),
  execute: async ({ input, telemetry }) => telemetry.withSpan("flight_demo.ticket.lookup", {
    attributes: {
      "flight_demo.booking_reference": input.bookingReference,
    },
  }, (span) => {
    const flightId = input.bookingReference.match(/^CD-(CL\d{3})-\d{4}$/i)?.[1]?.toUpperCase();
    if (!flightId || !flights.some((candidate) => candidate.id === flightId)) {
      throw new Error(`Unknown mocked booking reference '${input.bookingReference}'.`);
    }
    span.setAttribute("flight_demo.flight_id", flightId);
    return {
      bookingReference: input.bookingReference.toUpperCase(),
      status: "confirmed" as const,
      nextStep: "Check in opens 24 hours before departure.",
    };
  }),
});

export const getFlightInfo = tool("getFlightInfo", {
  description: "Get mocked flight information.",
  input: z.object({ flightNumber: z.string() }),
  output: flightSchema.optional(),
  execute: async ({ input, telemetry }) => telemetry.withSpan("flight_demo.flight.info_lookup", {
    attributes: {
      "flight_demo.flight_number": normalizeFlightId(input.flightNumber),
    },
  }, () => {
    const flightNumber = normalizeFlightId(input.flightNumber);
    const flight = flights.find((candidate) => candidate.id === flightNumber);
    if (!flight) throw new Error(`Unknown mocked flight '${input.flightNumber}'.`);
    return flight;
  }),
});

export function createFlightTools(options: CreateFlightToolsOptions = {}) {
  const sendWhatsAppCustomerMessage = createSendWhatsAppCustomerMessageTool(options.whatsapp);
  return {
    searchFlights,
    suggestFlightOptions,
    bookFlight,
    getTicketStatus,
    getFlightInfo,
    sendWhatsAppCustomerMessage,
  };
}

export const flightTools = createFlightTools();

export type FlightTools = ReturnType<typeof createFlightTools>;

function createSendWhatsAppCustomerMessageTool(options: FlightWhatsAppToolOptions = {}) {
  return tool("sendWhatsAppCustomerMessage", {
    description: "Send a customer WhatsApp verification link, confirmation link, or notification through the WhatsApp integration.",
    input: z.object({
      recipientPhone: z.string().min(5).max(48),
      messagePurpose: whatsAppMessagePurposeSchema,
      bookingReference: z.string().min(1).max(64).optional(),
      requestLabel: z.string().min(1).max(120).optional(),
      notificationText: z.string().min(1).max(600).optional(),
    }),
    output: z.object({
      provider: z.literal("whatsapp"),
      status: z.enum(["sent", "not-configured", "failed"]),
      purpose: whatsAppMessagePurposeSchema,
      recipientPhone: z.string(),
      recipientOverridden: z.boolean(),
      previewUrl: z.boolean(),
      messageId: z.string().optional(),
      link: z.string().url().optional(),
      reason: z.string().optional(),
      missingEnv: z.array(z.string()).optional(),
    }),
    sideEffect: true,
    policy: {
      capability: "send",
      providerPackageId: FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
      outbound: true,
      externallyVisible: true,
      requiredPolicyIds: [FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID],
    },
    idempotencyKey: ({ conversationId, input }) => [
      conversationId,
      "whatsapp",
      input.messagePurpose,
      normalizeWhatsAppPhone(options.recipientOverride ?? input.recipientPhone),
      shortHash(`${input.bookingReference ?? ""}:${input.notificationText ?? ""}`),
    ].join(":"),
    execute: async ({ input, conversationId, telemetry }) => telemetry.withSpan("flight_demo.whatsapp.send", {
      attributes: {
        "flight_demo.whatsapp.purpose": input.messagePurpose,
        "flight_demo.whatsapp.recipient_overridden": Boolean(options.recipientOverride),
      },
    }, async (span) => {
      const customerPhone = normalizeWhatsAppPhone(input.recipientPhone);
      const recipientPhone = normalizeWhatsAppPhone(options.recipientOverride ?? input.recipientPhone);
      if (!customerPhone || !recipientPhone) {
        return {
          provider: "whatsapp" as const,
          status: "failed" as const,
          purpose: input.messagePurpose,
          recipientPhone: maskPhone(input.recipientPhone),
          recipientOverridden: Boolean(options.recipientOverride),
          previewUrl: false,
          reason: "A valid WhatsApp phone number is required.",
        };
      }

      const message = createFlightWhatsAppMessage({
        conversationId,
        purpose: input.messagePurpose,
        customerPhone,
        confirmationBaseUrl: options.confirmationBaseUrl ?? "https://auth.cognidesk.local/flight-demo/whatsapp",
        ...(input.bookingReference ? { bookingReference: input.bookingReference } : {}),
        ...(input.requestLabel ? { requestLabel: input.requestLabel } : {}),
        ...(input.notificationText ? { notificationText: input.notificationText } : {}),
      });
      const sender = createWhatsAppSender(options);
      if (!sender) {
        const reason = options.reason ?? "Flight demo WhatsApp delivery is not configured.";
        span.setAttribute("flight_demo.whatsapp.status", "not-configured");
        return {
          provider: "whatsapp" as const,
          status: "not-configured" as const,
          purpose: input.messagePurpose,
          recipientPhone: maskPhone(recipientPhone),
          recipientOverridden: Boolean(options.recipientOverride),
          previewUrl: message.previewUrl,
          ...(message.link ? { link: message.link } : {}),
          reason,
          ...(options.missingEnv && options.missingEnv.length > 0 ? { missingEnv: options.missingEnv } : {}),
        };
      }

      const delivery = await sender.send({
        to: recipientPhone,
        body: message.body,
        purpose: input.messagePurpose,
        previewUrl: message.previewUrl,
        customerPhone,
        recipientOverridden: Boolean(options.recipientOverride),
        ...(input.bookingReference ? { bookingReference: normalizeBookingReference(input.bookingReference) } : {}),
        ...(message.link ? { link: message.link } : {}),
      });
      span.setAttribute("flight_demo.whatsapp.status", delivery.status);
      return {
        provider: "whatsapp" as const,
        status: delivery.status,
        purpose: input.messagePurpose,
        recipientPhone: maskPhone(recipientPhone),
        recipientOverridden: Boolean(options.recipientOverride),
        previewUrl: message.previewUrl,
        ...(delivery.messageId ? { messageId: delivery.messageId } : {}),
        ...(message.link ? { link: message.link } : {}),
        ...(delivery.reason ? { reason: delivery.reason } : {}),
        ...(delivery.missingEnv && delivery.missingEnv.length > 0 ? { missingEnv: delivery.missingEnv } : {}),
      };
    }),
  });
}

function createWhatsAppSender(options: FlightWhatsAppToolOptions): FlightWhatsAppCustomerMessageSender | null {
  if (options.sender) return options.sender;
  if (!options.configured || !options.accessToken || !options.phoneNumberId || !options.appSecret) return null;
  const integration = defineWhatsAppMessagingIntegration({
    accessToken: options.accessToken,
    phoneNumberId: options.phoneNumberId,
    appSecret: options.appSecret,
    ...(options.graphApiBaseUrl ? { graphApiBaseUrl: options.graphApiBaseUrl } : {}),
    ...(options.graphApiVersion ? { graphApiVersion: options.graphApiVersion } : {}),
  });
  return {
    async send(input) {
      try {
        const response = await integration.run("messaging.message.send", createWhatsAppTextMessage({
          to: input.to,
          body: input.body,
          previewUrl: input.previewUrl,
        })) as WhatsAppApiResponse;
        return {
          status: "sent",
          ...(response.messages?.[0]?.id ? { messageId: response.messages[0].id } : {}),
        };
      } catch (error) {
        return {
          status: "failed",
          reason: publicErrorMessage(error),
        };
      }
    },
  };
}

function createFlightWhatsAppMessage(input: {
  conversationId: string;
  purpose: FlightWhatsAppMessagePurpose;
  bookingReference?: string;
  requestLabel?: string;
  notificationText?: string;
  customerPhone: string;
  confirmationBaseUrl: string;
}) {
  const bookingReference = normalizeBookingReference(input.bookingReference);
  const reference = bookingReference ? ` for booking ${bookingReference}` : "";
  const requestLabel = input.requestLabel?.trim() || (
    input.purpose === "verification-link"
      ? "this verification"
      : input.purpose === "confirmation-link"
        ? "this confirmation"
        : "your support request"
  );
  if (input.purpose === "notification") {
    const body = input.notificationText?.trim()
      || `Cogni Air update${reference}: ${requestLabel} has an update. Please return to the chat for details.`;
    return { body, previewUrl: false };
  }

  const link = flightWhatsAppActionUrl({
    baseUrl: input.confirmationBaseUrl,
    conversationId: input.conversationId,
    purpose: input.purpose,
    bookingReference,
    customerPhone: input.customerPhone,
  });
  const actionLabel = input.purpose === "verification-link" ? "verification" : "confirmation";
  return {
    body: [
      `Cogni Air ${actionLabel}${reference}: ${link}`,
      "",
      `Use this link to continue ${requestLabel}.`,
      "Do not share passwords, one-time codes, passport numbers, or payment details in WhatsApp.",
    ].join("\n"),
    link,
    previewUrl: true,
  };
}

function flightWhatsAppActionUrl(input: {
  baseUrl: string;
  conversationId: string;
  purpose: FlightWhatsAppMessagePurpose;
  bookingReference: string;
  customerPhone: string;
}) {
  const action = input.purpose === "verification-link" ? "verify" : "confirm";
  const token = shortHash([
    input.conversationId,
    input.purpose,
    input.bookingReference,
    input.customerPhone,
  ].join(":"));
  return `${input.baseUrl.replace(/\/+$/, "")}/${action}/${token}`;
}

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function normalizeFlightId(value: string) {
  return value.replace(/\s+/g, "").toUpperCase();
}

function normalizeBookingReference(value: unknown) {
  return typeof value === "string" ? value.trim().toUpperCase() : "";
}

function normalizeWhatsAppPhone(value: string) {
  const trimmed = value.trim();
  const withoutSeparators = trimmed.replace(/[\s().-]+/g, "");
  const normalized = withoutSeparators.startsWith("+") ? withoutSeparators.slice(1) : withoutSeparators;
  return /^\d{5,20}$/.test(normalized) ? normalized : "";
}

function maskPhone(value: string) {
  const normalized = normalizeWhatsAppPhone(value);
  if (!normalized) return "invalid-phone";
  if (normalized.length <= 4) return `+${normalized}`;
  return `+${normalized.slice(0, Math.min(3, normalized.length - 4))}...${normalized.slice(-4)}`;
}

function shortHash(value: string) {
  return createHash("sha256").update(value).digest("base64url").slice(0, 24);
}

function publicErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "WhatsApp provider call failed.";
}

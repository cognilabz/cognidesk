import { desc, eq } from "drizzle-orm";
import type { StudioAgentIntrospection, StudioConversationSummary, StudioTargetManifest } from "@cognidesk/studio-contracts";
import { db, ensureStudioDatabase } from "@/server/db/client";
import { studioConversations } from "@/server/db/schema";

export type StudioConversationRow = StudioConversationSummary & {
  customerLabel: string;
  summary: string;
  satisfaction: "positive" | "neutral" | "negative";
};

const DEMO_CONVERSATION_COUNT = 1000;

type DemoConversationSeed = {
  customerLabel: string;
  lifecycle: "active" | "handoff" | "closed";
  summary: string;
  journeyId: string | null;
  stateIds: string[];
  traceIds: string[];
  eventCount: number;
  satisfaction: "positive" | "neutral" | "negative";
  createdHoursAgo: number;
  updatedHoursAgo: number;
};

export async function ensureDemoConversations(
  manifest: StudioTargetManifest,
  introspection: StudioAgentIntrospection | null = null,
) {
  await ensureStudioDatabase();
  const existingRows = await db.select({ id: studioConversations.id })
    .from(studioConversations)
    .where(eq(studioConversations.targetId, manifest.target.id));

  const journeys = introspection?.journeys ?? [];
  const journeyIds = journeys.map((journey) => journey.id);
  const agentId = introspection?.agent.id ?? manifest.target.id;
  const now = Date.now();
  const curatedDemoRows: DemoConversationSeed[] = [
    {
      customerLabel: "Mina Bauer",
      lifecycle: "closed" as const,
      summary: "Resolved a same-day rebooking after a delayed Vienna to Berlin segment.",
      journeyId: pickJourney(journeyIds, "book", 0),
      stateIds: ["select_flight", "confirm_booking"],
      traceIds: ["trace-rebook-20260527"],
      eventCount: 42,
      satisfaction: "positive" as const,
      createdHoursAgo: 31,
      updatedHoursAgo: 29,
    },
    {
      customerLabel: "Jonas Weber",
      lifecycle: "handoff" as const,
      summary: "Escalated baggage compensation after the assistant gathered documents and claim details.",
      journeyId: pickJourney(journeyIds, "baggage", 1),
      stateIds: ["collect_documents"],
      traceIds: ["trace-baggage-20260527"],
      eventCount: 58,
      satisfaction: "neutral" as const,
      createdHoursAgo: 20,
      updatedHoursAgo: 18,
    },
    {
      customerLabel: "Sara Novak",
      lifecycle: "closed" as const,
      summary: "Explained ticket status, fare conditions, and refund timing.",
      journeyId: pickJourney(journeyIds, "ticket", 2),
      stateIds: ["lookup_ticket", "explain_status"],
      traceIds: ["trace-ticket-20260527"],
      eventCount: 27,
      satisfaction: "positive" as const,
      createdHoursAgo: 12,
      updatedHoursAgo: 11,
    },
    {
      customerLabel: "Theo Klein",
      lifecycle: "active" as const,
      summary: "Currently comparing disruption options for a missed connection.",
      journeyId: pickJourney(journeyIds, "disruption", 3),
      stateIds: ["find_alternatives"],
      traceIds: ["trace-disruption-20260527"],
      eventCount: 19,
      satisfaction: "neutral" as const,
      createdHoursAgo: 4,
      updatedHoursAgo: 1,
    },
    {
      customerLabel: "Eva Schneider",
      lifecycle: "closed" as const,
      summary: "Completed check-in guidance and seat selection troubleshooting.",
      journeyId: pickJourney(journeyIds, "check", 4),
      stateIds: ["verify_booking", "resolve_checkin"],
      traceIds: ["trace-checkin-20260527"],
      eventCount: 35,
      satisfaction: "positive" as const,
      createdHoursAgo: 6,
      updatedHoursAgo: 5,
    },
    {
      customerLabel: "Noah Berger",
      lifecycle: "closed" as const,
      summary: "Could not complete a voluntary change because payment authorization failed twice.",
      journeyId: pickJourney(journeyIds, "book", 0),
      stateIds: ["payment_failed"],
      traceIds: ["trace-payment-20260527"],
      eventCount: 33,
      satisfaction: "negative" as const,
      createdHoursAgo: 48,
      updatedHoursAgo: 47,
    },
    {
      customerLabel: "Lena Koch",
      lifecycle: "handoff" as const,
      summary: "Escalated involuntary rebooking after fare-rule and voucher checks were exhausted.",
      journeyId: pickJourney(journeyIds, "disruption", 3),
      stateIds: ["handoff_ready"],
      traceIds: ["trace-rebooking-handoff-20260526"],
      eventCount: 64,
      satisfaction: "negative" as const,
      createdHoursAgo: 63,
      updatedHoursAgo: 61,
    },
    {
      customerLabel: "Markus Steiner",
      lifecycle: "closed" as const,
      summary: "Confirmed pet cabin policy and completed document checklist.",
      journeyId: pickJourney(journeyIds, "ticket", 2),
      stateIds: ["policy_answered"],
      traceIds: ["trace-policy-pet-20260526"],
      eventCount: 22,
      satisfaction: "positive" as const,
      createdHoursAgo: 70,
      updatedHoursAgo: 68,
    },
    {
      customerLabel: "Nora Weiss",
      lifecycle: "active" as const,
      summary: "Collecting missing passenger details before a booking change quote.",
      journeyId: pickJourney(journeyIds, "book", 0),
      stateIds: ["collect_passengers"],
      traceIds: ["trace-change-quote-20260525"],
      eventCount: 17,
      satisfaction: "neutral" as const,
      createdHoursAgo: 84,
      updatedHoursAgo: 82,
    },
    {
      customerLabel: "Ivan Horvat",
      lifecycle: "closed" as const,
      summary: "Solved boarding pass delivery by switching email address and resending documents.",
      journeyId: pickJourney(journeyIds, "check", 4),
      stateIds: ["resend_boarding_pass"],
      traceIds: ["trace-boarding-resend-20260525"],
      eventCount: 31,
      satisfaction: "positive" as const,
      createdHoursAgo: 93,
      updatedHoursAgo: 91,
    },
    {
      customerLabel: "Amelie Fischer",
      lifecycle: "handoff" as const,
      summary: "Handed over denied boarding compensation after eligibility evidence was ambiguous.",
      journeyId: pickJourney(journeyIds, "disruption", 3),
      stateIds: ["compensation_review"],
      traceIds: ["trace-compensation-handoff-20260524"],
      eventCount: 73,
      satisfaction: "neutral" as const,
      createdHoursAgo: 109,
      updatedHoursAgo: 107,
    },
    {
      customerLabel: "Paul Gruber",
      lifecycle: "closed" as const,
      summary: "Completed baggage allowance explanation for sports equipment.",
      journeyId: pickJourney(journeyIds, "baggage", 1),
      stateIds: ["allowance_answered"],
      traceIds: ["trace-sports-bag-20260524"],
      eventCount: 24,
      satisfaction: "positive" as const,
      createdHoursAgo: 118,
      updatedHoursAgo: 116,
    },
    {
      customerLabel: "Iris Mayer",
      lifecycle: "closed" as const,
      summary: "Resolved duplicate payment question and sent refund timing guidance.",
      journeyId: pickJourney(journeyIds, "ticket", 2),
      stateIds: ["refund_explained"],
      traceIds: ["trace-duplicate-payment-20260523"],
      eventCount: 29,
      satisfaction: "positive" as const,
      createdHoursAgo: 132,
      updatedHoursAgo: 129,
    },
    {
      customerLabel: "Daniel Schmid",
      lifecycle: "handoff" as const,
      summary: "Escalated group-booking seat split because no automatic options satisfied constraints.",
      journeyId: pickJourney(journeyIds, "book", 0),
      stateIds: ["group_seating_handoff"],
      traceIds: ["trace-group-seat-handoff-20260523"],
      eventCount: 69,
      satisfaction: "negative" as const,
      createdHoursAgo: 141,
      updatedHoursAgo: 139,
    },
    {
      customerLabel: "Olivia Novak",
      lifecycle: "closed" as const,
      summary: "Answered infant ticket and stroller policy questions.",
      journeyId: pickJourney(journeyIds, "ticket", 2),
      stateIds: ["policy_answered"],
      traceIds: ["trace-infant-policy-20260522"],
      eventCount: 18,
      satisfaction: "positive" as const,
      createdHoursAgo: 154,
      updatedHoursAgo: 153,
    },
    {
      customerLabel: "Felix Wagner",
      lifecycle: "active" as const,
      summary: "Checking available reroute options after a missed onward segment.",
      journeyId: pickJourney(journeyIds, "disruption", 3),
      stateIds: ["reroute_search"],
      traceIds: ["trace-reroute-active-20260522"],
      eventCount: 21,
      satisfaction: "neutral" as const,
      createdHoursAgo: 160,
      updatedHoursAgo: 158,
    },
    {
      customerLabel: "Klara Neumann",
      lifecycle: "closed" as const,
      summary: "Found booking record and explained schedule change notification.",
      journeyId: pickJourney(journeyIds, "ticket", 2),
      stateIds: ["status_explained"],
      traceIds: ["trace-schedule-change-20260521"],
      eventCount: 26,
      satisfaction: "neutral" as const,
      createdHoursAgo: 171,
      updatedHoursAgo: 169,
    },
    {
      customerLabel: "Robert Lang",
      lifecycle: "handoff" as const,
      summary: "Moved to human support for wheelchair assistance on a tight connection.",
      journeyId: pickJourney(journeyIds, "disruption", 3),
      stateIds: ["accessibility_handoff"],
      traceIds: ["trace-accessibility-handoff-20260521"],
      eventCount: 66,
      satisfaction: "neutral" as const,
      createdHoursAgo: 178,
      updatedHoursAgo: 176,
    },
  ];
  const demoRows = [
    ...curatedDemoRows,
    ...buildSyntheticConversationRows(journeyIds, DEMO_CONVERSATION_COUNT - curatedDemoRows.length),
  ];

  const rowsToInsert = demoRows.slice(existingRows.length);
  if (!rowsToInsert.length) return;

  const insertChunks = Array.from(
    { length: Math.ceil(rowsToInsert.length / 150) },
    (_, chunkNumber) => {
      const index = chunkNumber * 150;
      const chunk = rowsToInsert.slice(index, index + 150);
      return db.insert(studioConversations).values(chunk.map((row, chunkIndex) => ({
        id: `${manifest.target.id}:demo-conversation-${existingRows.length + index + chunkIndex + 1}`,
        targetId: manifest.target.id,
        agentId,
        customerLabel: row.customerLabel,
        lifecycle: row.lifecycle,
        summary: row.summary,
        activeJourneyId: row.journeyId,
        activeStateIdsJson: JSON.stringify(row.stateIds),
        traceIdsJson: JSON.stringify(row.traceIds),
        eventCount: row.eventCount,
        satisfaction: row.satisfaction,
        createdAt: new Date(now - row.createdHoursAgo * 60 * 60 * 1000),
        updatedAt: new Date(now - row.updatedHoursAgo * 60 * 60 * 1000),
      }))).onConflictDoNothing();
    }
  );
  await Promise.all(insertChunks);
}

export async function listStudioConversations(
  targetId: string,
  options: { limit?: number; offset?: number } = {},
) {
  await ensureStudioDatabase();
  const limit = clampInt(options.limit ?? 50, 1, DEMO_CONVERSATION_COUNT);
  const offset = clampInt(options.offset ?? 0, 0, 100000);
  const rows = await db.select().from(studioConversations)
    .where(eq(studioConversations.targetId, targetId))
    .orderBy(desc(studioConversations.updatedAt))
    .limit(limit)
    .offset(offset);
  return rows.map((row): StudioConversationRow => ({
    id: row.id,
    agentId: row.agentId,
    lifecycle: row.lifecycle,
    customerLabel: row.customerLabel,
    summary: row.summary,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
    ...(row.activeJourneyId ? { activeJourneyId: row.activeJourneyId } : {}),
    activeStateIds: parseStringArray(row.activeStateIdsJson),
    traceIds: parseStringArray(row.traceIdsJson),
    eventCount: row.eventCount,
    satisfaction: row.satisfaction,
  }));
}

function buildSyntheticConversationRows(journeyIds: string[], count: number): DemoConversationSeed[] {
  if (count <= 0) return [];
  return Array.from({ length: count }, (_, index) => {
    const seed = index + 1;
    const topic = syntheticConversationTopics[index % syntheticConversationTopics.length]!;
    const lifecycle = syntheticLifecycle(seed);
    const satisfaction = syntheticSatisfaction(seed, lifecycle);
    const updatedHoursAgo = (seed * 7) % (60 * 24);
    const createdHoursAgo = updatedHoursAgo + 1 + ((seed * 5) % 18);
    const handoffSummary = lifecycle === "handoff"
      ? "Escalated to a human specialist after the assistant collected the required context."
      : lifecycle === "active"
        ? "Still in progress with the assistant collecting the next detail."
        : "Resolved by the assistant without human intervention.";
    return {
      customerLabel: `${syntheticFirstNames[(seed * 3) % syntheticFirstNames.length]} ${syntheticLastNames[(seed * 7) % syntheticLastNames.length]}`,
      lifecycle,
      summary: `${topic.summary} ${handoffSummary}`,
      journeyId: pickJourney(journeyIds, topic.hint, seed),
      stateIds: lifecycle === "handoff"
        ? [topic.stateId, "handoff_ready"]
        : lifecycle === "active"
          ? [topic.stateId, "collect_next_detail"]
          : [topic.stateId, "resolved"],
      traceIds: [`trace-${topic.slug}-${String(seed).padStart(4, "0")}`],
      eventCount: 12 + ((seed * 11) % 74) + (lifecycle === "handoff" ? 18 : 0),
      satisfaction,
      createdHoursAgo,
      updatedHoursAgo,
    };
  });
}

function syntheticLifecycle(seed: number): "active" | "handoff" | "closed" {
  if (seed % 11 === 0 || seed % 17 === 0) return "handoff";
  if (seed % 5 === 0) return "active";
  return "closed";
}

function syntheticSatisfaction(
  seed: number,
  lifecycle: "active" | "handoff" | "closed",
): "positive" | "neutral" | "negative" {
  if (lifecycle === "handoff" && seed % 3 !== 0) return "negative";
  if (seed % 7 === 0 || lifecycle === "active") return "neutral";
  if (seed % 13 === 0) return "negative";
  return "positive";
}

function pickJourney(journeyIds: string[], hint: string, fallbackIndex: number) {
  return journeyIds.find((id) => id.toLowerCase().includes(hint))
    ?? journeyIds[fallbackIndex % Math.max(1, journeyIds.length)]
    ?? null;
}

function clampInt(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.trunc(value)));
}

function parseStringArray(value: string) {
  try {
    const parsed = JSON.parse(value) as unknown;
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

const syntheticFirstNames = [
  "Aisha",
  "Ben",
  "Carla",
  "David",
  "Elena",
  "Farid",
  "Greta",
  "Hanna",
  "Isabel",
  "Jakob",
  "Lea",
  "Milan",
  "Nina",
  "Omar",
  "Petra",
  "Rafael",
  "Sofia",
  "Tobias",
  "Vera",
  "Yusuf",
];

const syntheticLastNames = [
  "Adler",
  "Brandt",
  "Cerny",
  "Demir",
  "Eder",
  "Fuchs",
  "Graf",
  "Huber",
  "Ilic",
  "Jansen",
  "Kovac",
  "Lorenz",
  "Moser",
  "Nagy",
  "Ortner",
  "Pichler",
  "Roth",
  "Seidel",
  "Tomic",
  "Urban",
];

const syntheticConversationTopics = [
  {
    hint: "book",
    slug: "booking-change",
    stateId: "booking_change",
    summary: "Requested a booking change after comparing fare and seat constraints.",
  },
  {
    hint: "baggage",
    slug: "baggage-claim",
    stateId: "baggage_claim",
    summary: "Asked about baggage status, claim evidence, and compensation timing.",
  },
  {
    hint: "ticket",
    slug: "ticket-refund",
    stateId: "ticket_refund",
    summary: "Needed ticket status, refund eligibility, and payment timeline guidance.",
  },
  {
    hint: "disruption",
    slug: "disruption-reroute",
    stateId: "disruption_reroute",
    summary: "Compared disruption, missed connection, and reroute options.",
  },
  {
    hint: "check",
    slug: "checkin-seat",
    stateId: "checkin_seat",
    summary: "Troubleshot check-in, boarding pass delivery, and seat selection.",
  },
  {
    hint: "access",
    slug: "accessibility",
    stateId: "accessibility_support",
    summary: "Requested accessibility assistance and airport transfer coordination.",
  },
];

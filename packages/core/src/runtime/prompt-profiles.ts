import type {
  AgentModelSet,
  ModelAdapter,
  ModelMessage,
  ModelPromptProfile,
  PromptProfileRole,
} from "../types.js";

export async function applyModelPromptProfiles(args: {
  model: ModelAdapter;
  models?: AgentModelSet;
  runtimeProfile?: ModelPromptProfile;
  role: PromptProfileRole | "journeyEmbedding";
  messages: ModelMessage[];
}) {
  if (args.role === "journeyEmbedding") return args.messages;
  let messages = args.messages;
  for (const profile of [args.model.promptProfile, args.models?.promptProfile, args.runtimeProfile]) {
    if (!profile) continue;
    const input = {
      role: args.role,
      model: {
        provider: args.model.provider,
        model: args.model.model,
      },
      messages,
    };
    messages = await (profile.roleTransforms?.[args.role]?.(input)
      ?? profile.transformMessages?.(input)
      ?? messages);
  }
  return messages;
}

// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiPersonalConOperationKeys = [
  "personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login",
  "personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout",
  "personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze"
] as const;
export type NiceCxoneFullApiPersonalConOperationKey = typeof NiceCxoneFullApiPersonalConOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiPersonalConOperationPathParamMap {
  "personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login": { "sessionId": NiceCxoneFullApiPathParamValue };
  "personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout": { "sessionId": NiceCxoneFullApiPathParamValue };
  "personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiPersonalConOperationRequestMap {
  "personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login": NiceCxoneFullApiOperationInput<"personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login">;
  "personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout": NiceCxoneFullApiOperationInput<"personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout">;
  "personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze": NiceCxoneFullApiOperationInput<"personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze">;
}

export interface NiceCxoneFullApiPersonalConGeneratedClient {
  PersonalconApiDocsDialerLogon(...args: NiceCxoneFullApiOperationArgs<"personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login">): Promise<NiceCxoneFullApiOperationResponseMap["personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login"]>;
  PersonalconApiDocsDialerLogout(...args: NiceCxoneFullApiOperationArgs<"personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout">): Promise<NiceCxoneFullApiOperationResponseMap["personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout"]>;
  PersonalconApiDocsPersonalConSnoozes(...args: NiceCxoneFullApiOperationArgs<"personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze">): Promise<NiceCxoneFullApiOperationResponseMap["personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze"]>;
}

export const NiceCxoneFullApiPersonalConGeneratedFunctionNames = [
  "PersonalconApiDocsDialerLogon",
  "PersonalconApiDocsDialerLogout",
  "PersonalconApiDocsPersonalConSnoozes"
] as const satisfies readonly (keyof NiceCxoneFullApiPersonalConGeneratedClient)[];

export function createNiceCxoneFullApiPersonalConGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiPersonalConGeneratedClient {
  return {
    PersonalconApiDocsDialerLogon: (...args) => callOperation("personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login", ...(args as NiceCxoneFullApiOperationArgs<"personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login">)),
    PersonalconApiDocsDialerLogout: (...args) => callOperation("personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout", ...(args as NiceCxoneFullApiOperationArgs<"personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout">)),
    PersonalconApiDocsPersonalConSnoozes: (...args) => callOperation("personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze", ...(args as NiceCxoneFullApiOperationArgs<"personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze">)),
  };
}

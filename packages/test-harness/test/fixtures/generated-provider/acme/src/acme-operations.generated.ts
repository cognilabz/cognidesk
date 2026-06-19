// Hardened literal operation keys
export const acmeOperationIds = ["getWidget"] as const;

export type AcmeOperationId = typeof acmeOperationIds[number];

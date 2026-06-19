import type {
  AcmeOperationId,
} from "./acme-operations.generated.js";
import type {
  AcmeOperationPathParamMap,
  AcmeOperationRequestMap,
  AcmeOperationResponseMap,
} from "./acme-schema-types.generated.js";

export type AcmeGeneratedOperationCaller = <OperationId extends AcmeOperationId>(
  operationId: OperationId,
  input: AcmeOperationRequestMap[OperationId],
) => Promise<AcmeOperationResponseMap[OperationId]>;

export interface AcmeGeneratedClient {
  readonly requestOperation: AcmeGeneratedOperationCaller;
  readonly operationPathParams: AcmeOperationPathParamMap;
}

export function createAcmeGeneratedClient(requestOperation: AcmeGeneratedOperationCaller): AcmeGeneratedClient {
  return {
    requestOperation: requestOperation as AcmeGeneratedOperationCaller,
    operationPathParams: {
      getWidget: {
        widgetId: "fixture",
      },
    },
  };
}

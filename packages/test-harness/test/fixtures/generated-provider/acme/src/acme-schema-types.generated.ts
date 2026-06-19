export interface AcmeOperationPathParamMap {
  "getWidget": {
    readonly widgetId: string;
  };
}

export interface AcmeOperationQueryMap {
  "getWidget": {
    readonly locale?: string;
  };
}

export interface AcmeOperationRequestBodyMap {
  "getWidget": never;
}

export interface AcmeOperationRequestMap {
  "getWidget": {
    readonly path: AcmeOperationPathParamMap["getWidget"];
    readonly query?: AcmeOperationQueryMap["getWidget"];
  };
}

export interface AcmeWidget {
  readonly id: string;
  readonly name: string;
}

export interface AcmeOperationResponseMap {
  "getWidget": AcmeWidget;
}

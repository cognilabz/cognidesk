export interface CognideskHttpHandlerOptions {
  basePath?: string;
}

export interface CognideskHttpHandler {
  handle(request: Request): Promise<Response>;
}

export function createCognideskHttpHandler(_options: CognideskHttpHandlerOptions = {}): CognideskHttpHandler {
  return {
    async handle() {
      return Response.json(
        { error: "HTTP adapter runtime wiring is not implemented in this workpackage yet." },
        { status: 501 },
      );
    },
  };
}

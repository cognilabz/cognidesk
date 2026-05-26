export class DefinitionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DefinitionError";
  }
}

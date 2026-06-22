export interface PageInfo<Cursor extends string = string> {
  nextCursor?: Cursor;
  previousCursor?: Cursor;
  hasNextPage: boolean;
  hasPreviousPage?: boolean;
}

export interface IntegrationPage<Item, Cursor extends string = string> {
  items: Item[];
  pageInfo: PageInfo<Cursor>;
  raw?: unknown;
}

export interface CursorPaginationInput<Cursor extends string = string> {
  cursor?: Cursor;
  limit?: number;
}

export interface OffsetPaginationInput {
  offset?: number;
  limit?: number;
}

export function integrationPage<Item, Cursor extends string = string>(input: {
  items: readonly Item[];
  nextCursor?: Cursor;
  previousCursor?: Cursor;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  raw?: unknown;
}): IntegrationPage<Item, Cursor> {
  return {
    items: [...input.items],
    pageInfo: {
      ...(input.nextCursor !== undefined ? { nextCursor: input.nextCursor } : {}),
      ...(input.previousCursor !== undefined ? { previousCursor: input.previousCursor } : {}),
      hasNextPage: input.hasNextPage ?? input.nextCursor !== undefined,
      ...(input.hasPreviousPage !== undefined ? { hasPreviousPage: input.hasPreviousPage } : {}),
    },
    ...(input.raw !== undefined ? { raw: input.raw } : {}),
  };
}

export async function collectIntegrationPages<Item, Cursor extends string = string>(
  firstPage: CursorPaginationInput<Cursor>,
  loadPage: (input: CursorPaginationInput<Cursor>) => Promise<IntegrationPage<Item, Cursor>> | IntegrationPage<Item, Cursor>,
  options: { maxPages?: number } = {},
): Promise<Item[]> {
  const maxPages = options.maxPages ?? 100;
  if (maxPages < 1) {
    throw new Error("collectIntegrationPages requires maxPages >= 1.");
  }
  const items: Item[] = [];
  let cursor = firstPage.cursor;
  let pageCount = 0;

  do {
    const page = await loadPage({ ...firstPage, ...(cursor !== undefined ? { cursor } : {}) });
    items.push(...page.items);
    const nextCursor = page.pageInfo.nextCursor;
    pageCount += 1;
    if (!page.pageInfo.hasNextPage) break;
    if (nextCursor === undefined) {
      throw new Error("Pagination response is invalid: hasNextPage=true but nextCursor is undefined.");
    }
    cursor = nextCursor;
  } while (pageCount < maxPages);

  return items;
}

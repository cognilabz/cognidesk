function pushUnique<T>(items: T[], item: T) {
  if (!items.includes(item)) items.push(item);
}

export class CapabilityScope<TItem> {
  private readonly items: TItem[] = [];
  private onlyItems: TItem[] | null = null;
  private readonly excludedItems: TItem[] = [];

  add(...items: TItem[]) {
    for (const item of items) pushUnique(this.items, item);
    return this;
  }

  only(...items: TItem[]) {
    this.onlyItems = [...items];
    return this;
  }

  exclude(...items: TItem[]) {
    for (const item of items) pushUnique(this.excludedItems, item);
    return this;
  }

  list(inherited: TItem[] = []) {
    const base = this.onlyItems ?? [...inherited, ...this.items];
    return base.filter((item) => !this.excludedItems.includes(item));
  }
}

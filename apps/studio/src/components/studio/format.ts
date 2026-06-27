const dateTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

export function formatDateTime(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const parts = Object.fromEntries(dateTimeFormatter.formatToParts(date).map((part) => [part.type, part.value]));
  return `${parts.day ?? "--"} ${parts.month ?? "---"}, ${parts.hour ?? "--"}:${parts.minute ?? "--"}`;
}

export async function fetchJson(url, userAgent) {
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "user-agent": userAgent,
    },
  });
  if (!response.ok) throw new Error(`Unable to fetch ${url}: ${response.status} ${response.statusText}`);
  return response.json();
}

// src/lib/api/client.ts
const BASE_URL =
  process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  throw new Error(
    "Missing API base URL. Add API_BASE_URL or NEXT_PUBLIC_API_BASE_URL to .env.local"
  );
}

type FetchOptions = RequestInit & {
  next?: { revalidate?: number | false; tags?: string[] };
  /** If true, return parsed JSON even on 4xx/5xx (useful for validation errors) */
  allowErrorResponse?: boolean;
};

export async function apiFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { allowErrorResponse, ...rest } = options;
  const url = `${BASE_URL}${endpoint}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(rest.headers || {}),
    },
    ...rest,
  });

  if (!res.ok && !allowErrorResponse) {
    throw new Error(`API ${res.status} ${res.statusText} — ${url}`);
  }

  return res.json() as Promise<T>;
}
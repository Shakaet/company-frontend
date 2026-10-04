// src/lib/api/contact.ts
import { apiFetch } from "./client";
import type { ContactPayload, ContactApiResponse } from "@/lib/types";

export async function submitContact(
  payload: ContactPayload
): Promise<{ ok: true; data: ContactApiResponse["data"] } | { ok: false; error: string }> {
  try {
    const res = await apiFetch<ContactApiResponse>("/api/v1/contact", {
      method: "POST",
      body: JSON.stringify(payload),
      // no `next` option — this is a client-side POST
    });

    if (!res.success) {
      return { ok: false, error: res.message || "Submission failed" };
    }

    return { ok: true, data: res.data };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Network error";
    console.error("[submitContact] failed:", msg);
    return { ok: false, error: msg };
  }
}
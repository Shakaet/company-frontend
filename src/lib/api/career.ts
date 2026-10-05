// src/lib/api/career.ts
import { apiFetch } from "./client";
import type {
  ApplicationPayload,
  ApplicationApiResponse,
  ApplicationApiData,
  ApplicationValidationError,
} from "@/lib/types";

type SubmitResult =
  | { ok: true; data: ApplicationApiData }
  | {
      ok: false;
      error: string;
      validationErrors: ApplicationValidationError[];
    };

export async function submitApplication(
  payload: ApplicationPayload
): Promise<SubmitResult> {
  try {
    const res = await apiFetch<ApplicationApiResponse>(
      "/api/v1/career/apply",
      {
        method: "POST",
        body: JSON.stringify(payload),
        allowErrorResponse: true, // don't throw on 4xx — we need errorMessages
      }
    );

    if (!res.success) {
      return {
        ok: false,
        error: res.message || "Application submission failed",
        validationErrors: res.errorMessages ?? [],
      };
    }

    return { ok: true, data: res.data };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Network error";
    console.error("[submitApplication] failed:", msg);
    return { ok: false, error: msg, validationErrors: [] };
  }
}
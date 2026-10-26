import type { Ovok } from "@ovok/core/next";

export const apiBaseUrl =
  import.meta.env.VITE_OVOK_API_BASE_URL ?? "https://api.sandbox.ovok.com";

export const tenantCode =
  import.meta.env.VITE_OVOK_TENANT_CODE ?? "public-example";

let client: Ovok | null = null;

export async function getOvokClient(): Promise<Ovok> {
  if (client) return client;

  const { Ovok: OvokConstructor } = await import("@ovok/core/next");
  client = new OvokConstructor({
    baseUrl: apiBaseUrl,
    tenantCode,
    fhirPath: "/fhir/R4/",
    timeoutMs: 15000,
  });
  return client;
}

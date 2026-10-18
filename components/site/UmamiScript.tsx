import { UMAMI_SCRIPT_URL, UMAMI_WEBSITE_ID } from "@/lib/umami";

export function UmamiScript() {
  return (
    <script
      defer
      src={UMAMI_SCRIPT_URL}
      data-website-id={UMAMI_WEBSITE_ID}
    />
  );
}

export const UMAMI_SCRIPT_URL = "https://cloud.umami.is/script.js";
export const UMAMI_WEBSITE_ID = "7683013b-d792-467c-9627-5492d5a50843";
export const TRIAL_EVENT = "trial_clicked";

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string | number | boolean>) => void;
    };
  }
}

export function trackTrialClick() {
  if (typeof window === "undefined") return;
  window.umami?.track(TRIAL_EVENT);
}

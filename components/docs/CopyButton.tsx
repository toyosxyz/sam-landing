"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="font-body text-[12px] leading-4 text-mist transition-colors hover:text-foreground"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

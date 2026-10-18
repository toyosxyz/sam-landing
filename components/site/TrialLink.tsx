"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { SIGNUP_URL } from "@/lib/site";
import { trackTrialClick } from "@/lib/umami";

type TrialLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href?: ComponentProps<typeof Link>["href"];
};

export function TrialLink({ href = SIGNUP_URL, onClick, ...props }: TrialLinkProps) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        trackTrialClick();
        onClick?.(event);
      }}
      {...props}
    />
  );
}

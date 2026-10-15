import type { CSSProperties } from "react";

/** Lets a hero visual (`data-reveal="load-one"`) enter after the hero copy. */
export const heroDelay = { "--reveal-delay": "320ms" } as CSSProperties;

/** Stagger index for `.m-row` inside a revealed block. */
export const row = (i: number) => ({ "--row": i }) as CSSProperties;

/** Stagger index for `.m-bar` inside a revealed block. */
export const bar = (i: number) => ({ "--bar": i }) as CSSProperties;

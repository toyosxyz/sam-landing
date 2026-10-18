const paths = {
  right: "M5 12h14M13 6l6 6-6 6",
  left: "M19 12H5M11 6l-6 6 6 6",
  down: "M12 5v14M6 13l6 6 6-6",
  "up-right": "M7 17L17 7M8 7h9v9",
  "down-right": "M7 7l10 10M17 8v9H8",
};

export type ArrowDirection = keyof typeof paths;

export function Arrow({
  direction = "right",
  size = 16,
  className = "",
}: {
  direction?: ArrowDirection;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
      className={`shrink-0 ${className}`}
    >
      <path
        d={paths[direction]}
        fill="none"
        stroke="currentColor"
        strokeWidth={size <= 12 ? 2 : 1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

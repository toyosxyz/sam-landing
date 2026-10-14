export function SamLogo({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <circle cx="14" cy="14" r="14" fill="#A3E635" />
      <circle cx="18.5" cy="9.5" r="2.8" fill="#111311" />
      <path
        d="M4 18.5C7.5 15 11 14.5 14.5 16.5C17.5 18.2 21 17.8 24.5 15.5"
        fill="none"
        stroke="#111311"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.5 22C9.5 20 12.5 19.8 15.5 21C18 22 20.5 21.8 22.5 20.6"
        fill="none"
        stroke="#111311"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

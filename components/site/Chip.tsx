import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <div className="flex self-start items-center rounded-sm border border-[#EDEEE917] bg-[#EDEEE912] px-2.5 py-[5px] shadow-[inset_0_1px_0_#EDEEE90F] backdrop-blur-[12px]">
      <span className="font-body text-[11px] font-medium uppercase leading-[14px] tracking-[0.08em] text-[#C9CCC4]">
        {children}
      </span>
    </div>
  );
}

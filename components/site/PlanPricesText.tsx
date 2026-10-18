import { plansPlaintext } from "@/lib/site";

export function PlanPricesText({ className = "" }: { className?: string }) {
  return (
    <p className={`font-body text-[15px] leading-[23px] text-mist ${className}`}>
      {plansPlaintext()}
    </p>
  );
}

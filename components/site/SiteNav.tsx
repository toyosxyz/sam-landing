import { DesktopNav } from "./nav/DesktopNav";
import { MobileNav } from "./nav/MobileNav";

export function SiteNav() {
  return (
    <header className="relative z-40 w-full">
      <DesktopNav />
      <MobileNav />
    </header>
  );
}

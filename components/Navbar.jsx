"use client";

import { usePathname } from "next/navigation";
import CategoryIndicator from "./CategoryIndicator";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between py-6 md:py-10 px-6 md:px-16 lg:mb-24 max-w-[72.5rem] mx-auto">
      <div className="flex items-center">
        {pathname.length !== 1 && <CategoryIndicator />}
      </div>

      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;

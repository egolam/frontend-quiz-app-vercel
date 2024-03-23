import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleTheme() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else if (resolvedTheme === "light") {
      setTheme("dark");
    }
  }

  if (mounted)
    return (
      <div onClick={() => handleTheme()} className="md:w-32 h-7 flex gap-4 items-center justify-between text-grey-navy dark:text-white transition-all">
        <FiSun title="Sun Icon" />
        <div className="bg-primary rounded-full flex h-full items-center px-1 relative w-12">
          <span className={`bg-white absolute rounded-full w-5 h-5 ${resolvedTheme === "dark" ? "translate-x-full" : ""} transition-all`}></span>
        </div>
        <FiMoon title="Moon Icon" />
      </div>
    );
};

export default DarkModeToggle;

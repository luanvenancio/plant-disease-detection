"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Scan, BarChart2, User } from "lucide-react";

const BottomNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Scan", path: "/scan", icon: Scan },
    { name: "History", path: "/history", icon: BarChart2 },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex w-full max-w-[520px] -translate-x-1/2 items-center justify-between rounded-full border border-emerald-200/70 bg-white/95 px-6 py-3 shadow-[0_12px_40px_rgba(15,118,110,0.12)] dark:border-emerald-700/50 dark:bg-forest-deep/95">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center gap-1 text-[11px] font-semibold transition-all ${
              isActive
                ? "text-emerald-800 dark:text-emerald-200"
                : "text-emerald-500 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-200"
            }`}
          >
            <item.icon className={`w-6 h-6 ${isActive ? "text-emerald-700" : "text-current"}`} />
            <span className={isActive ? "opacity-100" : "opacity-70"}>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Home, Scan, BarChart2, User } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Scan", path: "/scan", icon: Scan },
  { name: "History", path: "/history", icon: BarChart2 },
  { name: "Profile", path: "/profile", icon: User },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="glass sticky top-0 z-50 border-b border-emerald-100/20 bg-white/85 backdrop-blur-xl dark:bg-forest-deep/90 dark:border-emerald-800/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
            <Leaf className="h-5 w-5" />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-300">
              Leaf Lens
            </span>
            <span className="text-sm font-semibold text-forest-deep dark:text-emerald-100">
              Plant Health AI
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2 rounded-full bg-emerald-50/90 px-2 py-1 shadow-inner shadow-emerald-200/30 dark:bg-emerald-900/30">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                    : "text-emerald-700 hover:text-emerald-900 dark:text-emerald-200 dark:hover:text-white"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
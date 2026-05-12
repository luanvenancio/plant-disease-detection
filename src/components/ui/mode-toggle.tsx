"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <></>;

    return (
        <div>
            {theme === 'dark' && (
                <Button variant="ghost" size="icon" className="hover:bg-emerald-100 dark:hover:bg-emerald-800 text-forest-deep dark:text-emerald-200" onClick={() => { setTheme('light') }}>
                    <Sun size={22} />
                </Button>
            )}
            {theme === 'light' && (
                <Button variant="ghost" size="icon" className="hover:bg-emerald-100 dark:hover:bg-emerald-800 text-forest-deep dark:text-emerald-200" onClick={() => { setTheme('dark') }}>
                    <Moon size={22} />
                </Button>
            )}
        </div>
    )
}

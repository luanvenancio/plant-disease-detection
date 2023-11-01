"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
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
                <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
                </Button>
            )}
            {theme === 'light' && (
                <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
                    <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                </Button>
            )}
        </div>
    )
}

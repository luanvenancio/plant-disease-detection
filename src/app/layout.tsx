import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Plant Disease Detection",
  description: "Plant Disease Detection",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#1B4332" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background text-foreground antialiased")}> 
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <div className="relative flex min-h-screen flex-col pt-16 pb-20">
            <PageTransition>{children}</PageTransition>
          </div>
          <BottomNav />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
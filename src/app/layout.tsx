import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plant Disease Detection",
  description: "Plant Disease Detection",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["next.js","next14","next15","pwa","next-pwa"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
        <meta name="theme-color" content="#80b251" />
        <link rel="manifest" href="/manifest.json"/>
        <link rel="icon" href="/agriscan-512.png"/>
        <link rel="apple-touch-icon" href="/agriscan-512.png"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="AgriScan" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-startup-image" href="/agriscan-512.png" />

      </head>
      <body
        className={cn("bg-background font-sans antialiased", inter.className)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative flex min-h-screen flex-col">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

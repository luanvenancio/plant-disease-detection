/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
});

const nextConfig = {
    distDir: "build",
    reactStrictMode: true,
    swcMinify: true,
    compiler:{
        removeConsole: process.env.NODE_ENV !== "development",
    },
    async headers() {
        return [
            {
                source: "/manifest.json",
                headers: [
                    { key: "Content-Type", value: "application/manifest+json" },
                    { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
                ],
            },
            {
                source: "/sw.js",
                headers: [
                    { key: "Service-Worker-Allowed", value: "/" },
                    { key: "Cache-Control", value: "no-cache" },
                ],
            },
            {
                source: "/workbox-:hash.js",
                headers: [
                    { key: "Service-Worker-Allowed", value: "/" },
                ],
            },
        ];
    },
}

module.exports = withPWA(nextConfig);
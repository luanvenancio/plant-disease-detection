"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Scan, BarChart2, User, ArrowRight, CloudSun, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Instant Disease Diagnosis",
    description: "Upload a plant image and get AI-powered disease analysis in seconds.",
    icon: Scan,
  },
  {
    title: "Track Scan History",
    description: "Review your past scans with clear health summaries and confidence scores.",
    icon: BarChart2,
  },
  {
    title: "Personalized Profile",
    description: "Save your plant records and manage settings from one dashboard.",
    icon: User,
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100 dark:from-forest-deep dark:via-emerald-950 dark:to-emerald-900">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_45%)] opacity-90" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.14),_transparent_40%)] opacity-90" />

      <section className="relative px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 shadow-sm shadow-emerald-100/80 dark:border-emerald-700/50 dark:bg-emerald-900/30 dark:text-emerald-300">
              Leaf Lens inspired
            </p>
            <h1 className="text-4xl font-black tracking-tight text-forest-deep sm:text-5xl md:text-6xl dark:text-emerald-100">
              Plant disease detection built for <span className="bg-gradient-to-r from-emerald-600 via-forest-mint to-emerald-500 bg-clip-text text-transparent animate-gradient-x">modern farming</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-700 dark:text-emerald-300 sm:text-xl">
              Upload plant images, get fast AI diagnosis, and keep track of your farm health with a polished Leaf Lens style experience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/scan"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-600/25 transition hover:bg-emerald-700 active:scale-[0.98]"
              >
                Start Scan
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/history"
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white/90 px-7 py-4 text-sm font-semibold text-forest-deep transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-emerald-700/40 dark:bg-forest-deep/80 dark:text-emerald-200"
              >
                View History
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-emerald-200/60 bg-white/85 p-6 shadow-2xl shadow-emerald-200/30 backdrop-blur-xl dark:border-emerald-800/50 dark:bg-forest-deep/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -top-10 right-6 h-24 w-24 rounded-full bg-emerald-200/50 blur-2xl" />
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between rounded-3xl border border-emerald-200/60 bg-emerald-50/80 px-4 py-4 dark:border-emerald-700/60 dark:bg-emerald-950/40">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300">Scan status</p>
                  <p className="mt-1 text-2xl font-semibold text-forest-deep dark:text-emerald-100">Ready</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-2 text-sm font-semibold text-white">
                  <CloudSun className="h-4 w-4" /> Live
                </div>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="glass rounded-3xl p-5 shadow-xl shadow-emerald-200/20 dark:shadow-black/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-forest-deep dark:text-emerald-100">{feature.title}</h3>
                        <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-300">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              className="glass rounded-[2rem] border border-emerald-200/70 bg-white/85 p-8 shadow-2xl shadow-emerald-200/20 dark:border-emerald-700/70 dark:bg-forest-deep/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">Plant Protection</p>
              <h2 className="mt-4 text-2xl font-bold text-forest-deep dark:text-emerald-100">Protect crops with smarter diagnostics.</h2>
              <p className="mt-4 text-sm leading-7 text-emerald-700 dark:text-emerald-300">Analyze plant conditions and get actionable insights before issues spread.</p>
            </motion.div>

            <motion.div
              className="glass rounded-[2rem] border border-emerald-200/70 bg-white/85 p-8 shadow-2xl shadow-emerald-200/20 dark:border-emerald-700/70 dark:bg-forest-deep/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">Farm History</p>
              <h2 className="mt-4 text-2xl font-bold text-forest-deep dark:text-emerald-100">Keep a clean record of every scan.</h2>
              <p className="mt-4 text-sm leading-7 text-emerald-700 dark:text-emerald-300">Review health trends and confidence scores across your plants with ease.</p>
            </motion.div>

            <motion.div
              className="glass rounded-[2rem] border border-emerald-200/70 bg-white/85 p-8 shadow-2xl shadow-emerald-200/20 dark:border-emerald-700/70 dark:bg-forest-deep/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">Easy Access</p>
              <h2 className="mt-4 text-2xl font-bold text-forest-deep dark:text-emerald-100">Everything in one clean dashboard.</h2>
              <p className="mt-4 text-sm leading-7 text-emerald-700 dark:text-emerald-300">Switch between scan, history, and profile pages with smooth navigation.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

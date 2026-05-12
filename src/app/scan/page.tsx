"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Camera, Leaf } from "lucide-react";
import { Modal } from "@/components/Modal";
import { ResultCard } from "@/components/ResultCard";
import { FileWithPreview } from "@/hooks/use-file-upload";

export default function Scan() {
  const [img, setImg] = useState<FileWithPreview | null>(null);

  const handleImg = (previewImg: FileWithPreview | null) => {
    setImg(previewImg);
  };

  const handleNewUpload = () => {
    setImg(null);
  };

  return (
    <main className="relative flex min-h-[calc(100vh-8rem)] flex-col items-center bg-gradient-to-br from-emerald-50 via-white to-green-100 px-4 py-10 dark:from-forest-deep dark:via-emerald-950 dark:to-emerald-900 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_45%)] opacity-90" />
      <div className="relative z-10 w-full max-w-4xl">
        <motion.div
          className="glass rounded-[2rem] border border-emerald-200/60 bg-white/90 p-8 shadow-2xl shadow-emerald-200/20 dark:border-emerald-700/60 dark:bg-forest-deep/75"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/25">
                <Leaf className="h-6 w-6" />
              </div>
              <h1 className="mt-4 text-3xl font-bold text-forest-deep dark:text-emerald-100 sm:text-4xl">
                Diagnose your plant health instantly.
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-emerald-700 dark:text-emerald-300">
                Upload a plant image, identify diseases, and get clear results with a smooth Leaf Lens-inspired interface.
              </p>
            </div>
            <div className="rounded-[2rem] bg-emerald-50/90 p-5 shadow-inner shadow-emerald-200/20 dark:bg-emerald-900/40">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                  <Camera className="h-5 w-5" />
                </span>
                Upload your plant photo
              </div>
              <p className="mt-3 text-sm text-emerald-600 dark:text-emerald-300">
                The faster you upload, the sooner you get AI-powered plant health insights.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {img ? (
            <ResultCard img={img.file as File} />
          ) : (
            <div className="glass rounded-[2rem] border border-emerald-200/60 bg-white/85 p-8 shadow-2xl shadow-emerald-200/20 dark:border-emerald-700/60 dark:bg-forest-deep/75">
              <div className="mx-auto max-w-xl text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                  <Camera className="h-8 w-8" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-forest-deep dark:text-emerald-100">
                  Choose a plant image to analyze
                </h2>
                <p className="mt-3 text-sm leading-6 text-emerald-600 dark:text-emerald-300">
                  We’ll show the diagnosis, confidence, and recommended next steps once the upload is complete.
                </p>
                <div className="mt-8">
                  <Modal handleImg={handleImg} handleNewUpload={handleNewUpload} />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}

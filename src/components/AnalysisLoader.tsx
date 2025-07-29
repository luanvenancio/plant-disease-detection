import Image from "next/image";
import { BorderTrail } from "@/components/core/border-trail";
import { TextShimmer } from "@/components/core/text-shimmer";
import { ProgressiveBlur } from "./core/progressive-blur";
import { useState } from "react";

type AnalysisLoaderProps = {
  img: File;
};

export function AnalysisLoader({ img }: AnalysisLoaderProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-sm">
      <div
        className="relative w-full max-w-[256px]"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Image
          alt="Analyzing plant image"
          src={URL.createObjectURL(img)}
          width={512}
          height={512}
          className="rounded-lg h-auto w-full"
        />
        <BorderTrail
          className="bg-gradient-to-l from-green-300 via-green-500 to-green-300 dark:from-green-700/60 dark:via-green-500 dark:to-green-700/60"
          size={120}
          transition={{
            ease: [0.5, 0.5, 0.5, 0.5],
            duration: 3,
            repeat: Infinity,
          }}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute inset-0"
          blurIntensity={0.15}
          animate={isHover ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      <TextShimmer
        className="text-md font-medium text-zinc-400 dark:text-zinc-500"
        duration={2}
      >
        Analyzing your plant...
      </TextShimmer>
    </div>
  );
}

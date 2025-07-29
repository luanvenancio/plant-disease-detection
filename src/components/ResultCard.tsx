"use client";

import { useToast } from "@/components/ui/use-toast";
import useSWR from "swr";
import {
  AnimatePresence,
  motion,
  type Transition,
  type Variants,
} from "framer-motion";
import { AnalysisLoader } from "./AnalysisLoader";
import { ResultDisplay } from "./ResultDisplay";
import { useState } from "react";
import { diseaseData } from "@/lib/disease-data";
import { Dialog, DialogContent } from "./ui/dialog";
import { DetailsModalContent } from "./DetailsModalContent";

interface GradioOutput {
  label: string;
  confidences: { label: string; confidence: number }[];
}

const customVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -20 },
};

const customTransition: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.4,
};

export function ResultCard({ img }: { img: File }) {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetcher = async (url: string) => {
    const formData = new FormData();
    formData.append("image", img);
    const response = await fetch(url, { method: "POST", body: formData });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `Request failed with status ${response.status}`
      );
    }
    return response.json();
  };

  const key = img ? `/api/analyze?name=${img.name}&size=${img.size}` : null;
  const { data, error, isLoading } = useSWR<GradioOutput>(key, fetcher, {
    shouldRetryOnError: false,
    onError: (err) => {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: err.message,
      });
    },
  });

  const getPlantAnalysis = () => {
    if (!data || !data.confidences || data.confidences.length === 0)
      return null;

    const topPrediction = data.confidences[0];
    const score = topPrediction.confidence;
    const label = topPrediction.label;

    let name = "";
    let diagnosis = "";

    if (label.includes("___")) {
      const parts = label.split("___");
      name = parts[0].replace(/_/g, " ");
      diagnosis = parts[1].replace(/_/g, " ");
    } else {
      const parts = label.split("_");
      name = parts[0];
      diagnosis = parts.slice(1).join(" ");
    }

    const otherPredictions = data.confidences.slice(1, 3).map((p) => {
      let predName, predDiag;
      if (p.label.includes("___")) {
        [predName, predDiag] = p.label.split("___");
      } else {
        const parts = p.label.split("_");
        predName = parts[0];
        predDiag = parts.slice(1).join(" ");
      }
      const formattedLabel = `${predName.replace(
        /_/g,
        " "
      )}: ${predDiag.replace(/_/g, " ")}`;
      return {
        label: formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1),
        confidence: p.confidence,
      };
    });

    return {
      name,
      diagnosis,
      accuracy: score > 0.7 ? "High" : score > 0.4 ? "Medium" : "Low",
      score: score,
      otherPredictions,
    };
  };

  const plantAnalysis = getPlantAnalysis();
  const diagnosisKey =
    plantAnalysis?.diagnosis.toLowerCase().replace(/\s/g, "") || "";
  const detailsData = diseaseData[diagnosisKey];

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <div className="flex flex-col items-center justify-center w-full min-h-[400px]">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              variants={customVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={customTransition}
            >
              <AnalysisLoader img={img} />
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              variants={customVariants}
              initial="initial"
              animate="animate"
            >
              <div className="text-red-500 text-center p-4">
                Error: {error.message}
              </div>
            </motion.div>
          ) : plantAnalysis ? (
            <motion.div
              key="result"
              variants={customVariants}
              initial="initial"
              animate="animate"
              transition={customTransition}
              className="flex flex-col items-center gap-6 max-w-lg w-full"
            >
              <h2 className="text-xl font-medium tracking-normal">
                Analysis Result
              </h2>
              <ResultDisplay plantAnalysis={plantAnalysis} img={img} />
            </motion.div>
          ) : (
            <motion.div
              key="fallback"
              variants={customVariants}
              initial="initial"
              animate="animate"
            >
              <div className="text-red-500">
                Could not parse analysis results.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {plantAnalysis && detailsData && (
        <DialogContent className="sm:max-w-2xl border-border">
          <DetailsModalContent
            plantAnalysis={plantAnalysis}
            detailsData={detailsData}
            img={img}
          />
        </DialogContent>
      )}
    </Dialog>
  );
}

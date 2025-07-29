import Image from "next/image";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { DialogTrigger } from "./ui/dialog";
import { Info, BookOpen } from "lucide-react";
import { diseaseData } from "@/lib/disease-data";
import { Button } from "./ui/button";

interface OtherPrediction {
  label: string;
  confidence: number;
}

interface PlantAnalysis {
  name: string;
  diagnosis: string;
  accuracy: string;
  score: number;
  otherPredictions: OtherPrediction[];
}

interface ResultDisplayProps {
  plantAnalysis: PlantAnalysis;
  img: File;
}

const getReliabilityInfo = (accuracy: string) => {
  switch (accuracy) {
    case "High":
      return "The model is highly confident in this diagnosis.";
    case "Medium":
      return "The model has moderate confidence. The diagnosis is likely correct, but consider observing the plant for further symptoms.";
    case "Low":
      return "The model has low confidence and could not reliably identify the issue. Please try a clearer photo or consult a professional.";
    default:
      return "Reliability could not be determined.";
  }
};

export function ResultDisplay({ plantAnalysis, img }: ResultDisplayProps) {
  const diagnosisKey = plantAnalysis.diagnosis.toLowerCase().replace(/\s/g, "");
  const canLearnMore = diseaseData[diagnosisKey] !== undefined;

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border bg-zinc-100/70 dark:border-zinc-800 dark:bg-zinc-900/80 backdrop-blur-xs transition-all duration-300">
      <Image
        src={URL.createObjectURL(img)}
        alt="Analyzed plant"
        width={400}
        height={300}
        className="h-56 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h2 className="font-medium leading-snug text-zinc-700 dark:text-zinc-300">
              {plantAnalysis.name}
            </h2>
            <motion.p
              className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {plantAnalysis.diagnosis}
            </motion.p>
          </div>
          <div className="text-right shrink-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-help">
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-400 flex items-center justify-end gap-1.5">
                      Reliability
                      <Info className="h-3 w-3" />
                    </p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {plantAnalysis.accuracy} ({plantAnalysis.score.toFixed(2)}
                      )
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{getReliabilityInfo(plantAnalysis.accuracy)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {canLearnMore && plantAnalysis.diagnosis.toLowerCase() !== "healthy" && (
        <div className="border-t border-border dark:border-zinc-800 p-2">
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="w-full text-zinc-700 dark:text-zinc-300"
            >
              Learn More
            </Button>
          </DialogTrigger>
        </div>
      )}
    </div>
  );
}

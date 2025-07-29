import Image from "next/image";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Dialog,
} from "@/components/ui/dialog";
import type { DiseaseInfoData } from "@/lib/disease-data";
import { ExternalLink } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

interface OtherPrediction {
  label: string;
  confidence: number;
}

interface PlantAnalysis {
  name: string;
  diagnosis: string;
  otherPredictions: OtherPrediction[];
}

interface DetailsModalContentProps {
  plantAnalysis: PlantAnalysis;
  detailsData: DiseaseInfoData;
  img: File;
}

export function DetailsModalContent({
  plantAnalysis,
  detailsData,
  img,
}: DetailsModalContentProps) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>
          {plantAnalysis.name}: {plantAnalysis.diagnosis}
        </DialogTitle>
        <DialogDescription>
          Detailed analysis, treatment options, and other possibilities.
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="max-h-[65vh] pr-6">
        <div className="space-y-6 py-4">
          <Image
            src={URL.createObjectURL(img)}
            alt="Analyzed plant"
            width={400}
            height={300}
            className="w-full h-auto max-h-64 object-cover rounded-lg border border-border"
          />

          <div>
            <h3 className="text-md font-semibold mb-2">Description</h3>
            <p className="text-sm text-muted-foreground">
              {detailsData.description}
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-2">
              Treatment & Prevention
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {detailsData.treatment.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          <Separator />
          {plantAnalysis.otherPredictions.length > 0 && (
            <div>
              <h3 className="text-md font-semibold mb-4">
                Other Possibilities
              </h3>
              <div className="space-y-4">
                {plantAnalysis.otherPredictions.map((p, index) => (
                  <div key={index} className="text-xs">
                    <div className="flex justify-between items-center text-zinc-700 dark:text-zinc-300 mb-1">
                      <span>{p.label}</span>
                      <span>{(p.confidence * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-zinc-300/50 dark:bg-zinc-700/50 rounded-full h-1.5">
                      <div
                        className="bg-zinc-400 dark:bg-zinc-500 rounded-full h-1.5"
                        style={{ width: `${p.confidence * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center pt-4">
            <a
              href={detailsData.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground flex items-center justify-center gap-1"
            >
              Learn more from source <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}

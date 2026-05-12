"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileUpload } from "./FileUpload";
import { PlusIcon } from "lucide-react";
import { FileWithPreview } from "@/hooks/use-file-upload";

type ModalProps = {
  handleImg: (previewImg: FileWithPreview | null) => void;
  handleNewUpload: () => void;
};

export function Modal({ handleImg, handleNewUpload }: ModalProps) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<FileWithPreview | null>(null);

  const handleFileChange = (files: FileWithPreview[]) => {
    if (files.length > 0) {
      setFile(files[0]);
    } else {
      setFile(null);
    }
  };

  const handleAnalyze = () => {
    if (file) {
      handleImg(file);
      setOpen(false);
    }
  };

  const onOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      handleNewUpload();
    }
    setOpen(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-forest-mint hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all hover:shadow-xl">
          <PlusIcon size={20} className="mr-2" /> Scan Plant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl rounded-xl glass dark:glass-dark border-emerald-200/50 dark:border-emerald-700/50">
        <DialogHeader>
          <DialogTitle className="text-forest-deep dark:text-emerald-200">Upload File</DialogTitle>
          <DialogDescription className="text-emerald-700 dark:text-emerald-300">
            Upload a photo of your plant to help us identify any diseases or
            pests.
          </DialogDescription>
        </DialogHeader>
        <FileUpload onFilesChange={handleFileChange} />
        <DialogFooter>
          <Button
            className="bg-forest-mint hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg"
            onClick={handleAnalyze}
            disabled={!file}
            type="submit"
          >
            Analyze
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { AlertCircleIcon, ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  formatBytes,
  useFileUpload,
  FileWithPreview,
} from "@/hooks/use-file-upload";
import { ProgressiveBlur } from "@/components/core/progressive-blur";

interface FileUploadProps {
  onFilesChange: (files: FileWithPreview[]) => void;
}

export function FileUpload({ onFilesChange }: FileUploadProps) {
  const maxSizeMB = 5;
  const maxSize = maxSizeMB * 1024 * 1024;
  const [isHovered, setIsHovered] = useState(false);

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      openFileDialog,
      handleDrop,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/*",
    maxSize,
    multiple: false,
  });

  useEffect(() => {
    onFilesChange(files);
  }, [files, onFilesChange]);

  const hasFile = files.length > 0;

  return (
    <div className="flex flex-col gap-4">
      <div
        role="button"
        onClick={openFileDialog}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-files={files.length > 0 || undefined}
        data-dragging={isDragging || undefined}
        className="border-input hover:bg-accent/50 data-[files=true]:hover:bg-transparent data-[files=true]:border-none data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
      >
        <input
          {...getInputProps()}
          className="sr-only"
          aria-label="Upload image file"
        />

        {hasFile ? (
          <div
            className="relative w-full max-w-md overflow-hidden rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {files[0].preview && (
              <img
                src={files[0].preview}
                alt={files[0].file.name}
                className="h-auto w-full object-contain"
              />
            )}
            <ProgressiveBlur
              className="pointer-events-none absolute inset-0 h-full w-full"
              blurIntensity={0.5}
              animate={isHovered ? "visible" : "hidden"}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/60 to-transparent pt-10"
              animate={isHovered ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="flex flex-col items-start gap-0 p-4">
                <p className="text-base font-medium text-white truncate max-w-full">
                  {files[0].file.name}
                </p>
                <span className="text-sm text-zinc-300">
                  {formatBytes(files[0].file.size)}
                </span>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
            <div
              className="bg-background mb-2 flex size-auto p-3 shrink-0 items-center justify-center rounded-full border border-border"
              aria-hidden="true"
            >
              <ImageIcon className="size-4.5 opacity-60" />
            </div>
            <p className="mb-1.5 text-sm font-medium">
              Drop your image here or click to browse
            </p>
            <p className="text-muted-foreground text-xs">
              PNG, JPG, WEBP (max. {maxSizeMB}MB)
            </p>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  );
}

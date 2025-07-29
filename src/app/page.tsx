"use client";

import { useState } from "react";
import { Modal } from "@/components/Modal";
import { ResultCard } from "@/components/ResultCard";
import { Navbar } from "@/components/Navbar";
import { FileWithPreview } from "@/hooks/use-file-upload";

export default function Home() {
  const [img, setImg] = useState<FileWithPreview | null>(null);

  const handleImg = (previewImg: FileWithPreview | null) => {
    setImg(previewImg);
  };

  const handleNewUpload = () => {
    setImg(null);
  };

  return (
    <>
      <Navbar>
        {img && (
          <Modal handleImg={handleImg} handleNewUpload={handleNewUpload} />
        )}
      </Navbar>
      <main className="flex grow flex-col items-center justify-center p-4">
        {img ? (
          <ResultCard img={img.file as File} />
        ) : (
          <div className="text-center">
            <h2 className="text-lg font-bold tracking-tight">
              Diagnose Your Plant
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Upload a photo of your plant to help us identify any diseases or
              pests.
            </p>
            <div className="mt-6">
              <Modal handleImg={handleImg} handleNewUpload={handleNewUpload} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

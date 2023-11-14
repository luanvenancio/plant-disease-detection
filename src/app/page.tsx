"use client";

import { ChangeEvent, Suspense, useMemo, useState } from "react";
import useSWR from "swr";
import Modal from "@/components/Modal";
import { ResultCard } from "@/components/ResultCard";
import { ResultCardSkeleton } from "@/components/ResultCardSkeleton";
import { Navbar } from "@/components/Navbar";

export type Plants = {
  name: string
  diagnosis: string
  status: "Pending" | "Analysing" | "Success" | "Failed"
  score: number
  accuracy: "High" | "Medium" | "Low"
}

export default function Home() {

  const [img, setImg] = useState<File | null>(null);

  const handleImg = (previewImg: File) => {
    if (!previewImg) {
      return null
    }

    setImg(previewImg);
  }

  return (
    <>

      {!img &&
        (
          <>

            <Navbar />
            <main>
              <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-md font-semibold">Diagnose Your Plant</h2>
                <p className="text-sm text-muted-foreground font-medium leading-none mt-4 mb-6">Upload a photo of your plant to help us identify any diseases or pests.</p>

                <Modal
                  handleImg={handleImg}
                />

              </div>
            </main>
          </>
        )
      }

      {img &&
        (
          <>
            <Navbar>
              <Modal
                handleImg={handleImg}
              />
            </Navbar>
            <main>
              <div className="flex flex-col items-center justify-center h-screen">
                <Suspense fallback={<ResultCardSkeleton />}>
                  <ResultCard img={img} />
                </Suspense>
              </div>
            </main>
          </>
        )
      }
    </>
  );
}

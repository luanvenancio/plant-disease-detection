"use client";
import { ChangeEvent, useMemo, useState } from "react";
import useSWR from "swr";
import Modal from "@/components/Modal";
import { ResultCard } from "@/components/ResultCard";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Navbar } from "@/components/Navbar";

export type Plants = {
  name: string
  result: string
  status: "Pending" | "Analysing" | "Success" | "Failed"
  score: number
  accuracy: "High" | "Medium" | "Low"
}

export default function Home() {
  const [img, setImg] = useState("");
  const [result, setResult] = useState<Plants>();

  const handleImg = (previewImg: File) => {
    if (!previewImg) {
      return null
    }

    setImg(URL.createObjectURL(previewImg))
  }

  const handleResult = (result: Plants) => {
    setResult(result);
  }

  return (
    <main className="w-screen h-screen">

      {!img &&
        (
          <>

            <Navbar>
              <Modal
                handleResult={handleResult}
                handleImg={handleImg}
              />
            </Navbar>
            <div className="flex flex-col items-center justify-center w-screen h-screen">
              <h2 className="text-md font-semibold">Diagnose Your Plant</h2>
              <p className="text-sm text-muted font-medium leading-none mt-4 mb-6">Upload a photo of your plant to help us identify any diseases or pests.</p>

              <Modal
                handleResult={handleResult}
                handleImg={handleImg}
              />
            </div>
          </>
        )
      }

      {img && result &&
        (
          <>
            <Navbar>
              <Modal
                handleResult={handleResult}
                handleImg={handleImg}
              />
            </Navbar>

            <div className="flex flex-col items-center justify-center w-full h-full">

              <h1 className="text-3xl md:text-5xl font-display tracking-tight font-bold mb-8">Result</h1>

              <Image
                alt="Plant Image preview"
                src={img}
                width={200}
                height={200}
                style={{
                  borderRadius: '0.5rem',
                  marginTop: '1.5rem',
                  marginBottom: '1.5rem'
                }}
              />

              <ResultCard {...result} />

            </div>
          </>
        )
      }
    </main>
  );
}

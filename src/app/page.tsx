"use client";
import { InputFile } from "@/components/InputFile";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useMemo, useState } from "react";
import { Dropzone } from "@/components/Dropzone";
import useSWR from "swr";
import Modal from "@/components/Modal";
import DataTablePage from "./plants/page";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ResultCard } from "@/components/ResultCard";

type imgProps = {
  handleImg: (previewImg: File) => void;
}

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
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <Modal handleResult={handleResult} handleImg={handleImg} />
        <img className="rounded-lg w-1/4 my-6" src={img} width="200px" />
        {result &&
          <ResultCard {...result} />
        }
      </div>
    </main>
  );
}

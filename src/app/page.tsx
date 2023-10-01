"use client";
import { InputFile } from "@/components/InputFile";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useMemo, useState } from "react";
import { Dropzone } from "@/components/Dropzone";
import useSWR from "swr";
import Modal from "@/components/Modal";
import { Plants } from "./plants/columns";
import DataTablePage from "./plants/page";

export default function Home() {
  const [img, setImg] = useState("");
  const [result, setResult] = useState<Plants>();

  const handleImg = (previewImg: string) => {
    setImg(previewImg);
  }

  const handleResult = (result: Plants) => {
    setResult(result);
  }

  return (
    <main className="w-screen h-screen">
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <Modal handleResult={handleResult} handleImg={handleImg} />
        <img className="rounded-lg w-1/4" src={img} width="200px" />
        {result &&
          <DataTablePage {...result} />
        }
      </div>
    </main>
  );
}

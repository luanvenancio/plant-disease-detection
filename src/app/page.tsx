"use client";
import { InputFile } from "@/components/InputFile";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { Dropzone } from "@/components/Dropzone";
import useSWR from "swr";

export default function Home() {
    /*const handleSubmit = async (event: any) => {
      event.preventDefault();
  
      if (!file) {
        return new Error("No file");
    };*/

    /*const [loading, setLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [diagnosis, setDiagnosis] = useState<string>("");
    const [score, setScore] = useState("");
    const [file, setFile] = useState<File>();
  
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
      }
    };
  
    const fetcher = (url: string) =>
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "image/jpeg",
          "content-length": `${file?.size}`,
          Authorization: `Bearer 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`,
        },
        body: file,
      }).then((res) => res.json());
  
      //setLoading(true);
  
      const { data, error, isLoading } = useSWR(
        "https://api-inference.huggingface.co/models/surgeonwz/plant-village",
        fetcher
      );
  
      if (error) return "An error has occurred.";
      if (isLoading) return <div className="loading">Loading...</div>;
  
      console.log("Data" + data);*/
    /*if (!response.ok) {
              throw new Error("Failed to generate image");
          }
  
          const result = await response.json();
  
          const [first, ...rest] = result[0].label.split("_");
  
          setDiagnosis(rest.join(" "));
          setScore(result[0].score.toFixed(2));
          setLoading(false);*/
    /*const [first, ...rest] = data[0].label.split("_");
  
      setDiagnosis(rest.join(" "));
      setScore(data[0].score.toFixed(2));
    };*/

    ////////RETURN

    /*
    {previewImage && (
            <>
              <img className="rounded-xl mt-4" src={previewImage} width="400px" />
            </>
          )}
          {diagnosis && score && (
            <div className="rounded-xl bg-white mt-4 justify-start flex flex-col">
              <span className="bg-blue-100 text-blue-800 text-center text-xs font-medium mr-2 px-0.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {score}
              </span>
              <p className="text-start text-sm font-semibold">{diagnosis}</p>
            </div>
  
            <div className="flex flex-col justify-center items-center w-1/4">
          <InputFile />
          <form
            className="flex flex-col items-center mt-4"
            onSubmit={handleSubmit}
          >
            <Input id="picture" type="file" />
          </form>
        </div>
          )}
          */

    return (
        <main className="w-screen h-screen bg-neutral-800">
            <div className="flex flex-col items-center justify-center h-screen w-screen">
                <Dropzone />
            </div>
        </main>
    );
}

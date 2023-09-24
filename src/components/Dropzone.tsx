"use client";

import { useDropzone } from "react-dropzone";
import { useCallback, useMemo, useState } from "react";
import { UploadIcon } from "@/icons/UploadIcon";
import { DropzonePreview } from "./DropzonePreview";
import { Button } from "./ui/button";

const API_TOKEN = "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";

type responseType = {
    score: number;
    label: string;
}

export function Dropzone() {
    const [files, setFiles] = useState<File | null>(null);
    const [result, setResult] = useState<responseType>();
    //const [previewImg, setPreviewImg] = useState("");

    const onDrop = useCallback((files: File[]) => {
        setFiles(files[0]);
        //setPreviewImg(URL.createObjectURL(files[0]));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [
                ".png",
                ".jpeg",
                ".jpg",
                ".webp",
            ],
        },
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!files) {
            return null;
        }

        const response = await fetch(
            "https://api-inference.huggingface.co/models/surgeonwz/plant-village",
            {
                headers: { Authorization: `Bearer ${API_TOKEN}` },
                method: "POST",
                body: files,
            }
        );

        if (!response.ok) {
            throw new Error("Failed");
        }

        const r = await response.json();
        console.log(r[0]);
        setResult(r[0]);

    }

    const previewImg = useMemo(() => {
        if (!files) {
            return null
        }

        return URL.createObjectURL(files)
    }, [files])

    return (
        <form onSubmit={handleSubmit} className="w-1/3 h-min">
            <div
                {...getRootProps()}
                className={`flex flex-col justify-center items-center cursor-pointer h-3/4 p-8 rounded-lg border-dashed border hover:border-gray-300 transition-all mb-4
      ${isDragActive ? "border-blue-500" : "border-gray-400"}`}
            >
                <input {...getInputProps()} />
                {!previewImg ? (
                    <>
                        <h1 className="font-bold font-xl text-white text-xl text-center mb-4 mt-2">
                            Upload File
                        </h1>
                        {isDragActive ? (
                            <p className="font-sm text-gray-400 text-center">Drop the files here ...</p>
                        ) : (
                            <>
                                <p className="font-sm text-gray-400 text-center">
                                    Drag and drop your files here

                                </p>
                                <p className="font-sm text-gray-400 text-center">
                                    Supported formats: JPG, PNG, JPEG, WEBP
                                </p>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        {result && <p className="font-sm text-gray-400 text-center">{result.label}</p>}
                        <DropzonePreview previewImg={previewImg} files={files} />
                    </>
                )}
            </div>
            <Button type="submit" className="w-full bg-emerald-400">
                Executar
            </Button>
        </form>
    );
}

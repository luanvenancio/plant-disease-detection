"use client";

import { useDropzone } from "react-dropzone";
import { useCallback, useMemo, useState } from "react";
import { DropzonePreview } from "./DropzonePreview";
import { Separator } from "./ui/separator";

type plantResult = {
    name: string
    result: string
    status: "pending" | "processing" | "success" | "failed"
    score: number
    accuracy: "High" | "Medium" | "Low"
}

type DropzoneProps = {
    handleFiles: (files: any) => void;
}

export function Dropzone({ handleFiles }: DropzoneProps) {
    const [files, setFiles] = useState<File | null>(null);
    //const [previewImg, setPreviewImg] = useState("");

    const onDrop = useCallback((files: File[]) => {
        setFiles(files[0]);
        handleFiles(files[0]);
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

    const previewImg = useMemo(() => {
        if (!files) {
            return null
        }

        return URL.createObjectURL(files)
    }, [files])

    return (
        <div className="flex flex-col space-y-4 pt-4">
            <div
                {...getRootProps()}
                className={`grid grid-rows-2 items-center gap-4 cursor-pointer h-3/4 p-8 rounded-lg border-dashed border hover:border-gray-300 transition-all
      ${isDragActive ? "border-blue-500" : "border-gray-400"}`}
            >
                <input {...getInputProps()} />
                <>
                    {isDragActive ? (
                        <p className="text-md font-medium text-gray-400 text-center">Drop the files here ...</p>
                    ) : (
                        <>
                            <p className="text-md font-medium text-gray-400 text-center">
                                Drag and drop your files here

                            </p>
                            <p className="text-sm text-gray-400 text-center">
                                Supported formats: JPG, PNG, JPEG, WEBP
                            </p>
                        </>
                    )}
                </>
            </div>
            {previewImg &&
                <>
                    <Separator />
                    <div className="grid items-center">
                        <DropzonePreview previewImg={previewImg} files={files} />
                    </div>
                </>
            }
        </div>
    );
}

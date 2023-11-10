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

import Resizer from "react-image-file-resizer";

const resizeFile = (file: File) => {
    return new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            256,
            256,
            "JPEG",
            100,
            0,
            (uri) => {
                resolve(uri);
            },
            "file",
        );
    });
};

export function Dropzone({ handleFiles }: DropzoneProps) {
    const [files, setFiles] = useState<File | null>(null);
    const [prevImg, setPrevImg] = useState<File | null>(null);

    const onDrop = useCallback(async (files: File[]) => {
        const resizedImage: File = await resizeFile(files[0]) as File;
        //console.log(resizedImage);
        //console.log(files[0]);

        setPrevImg(resizedImage);
        setFiles(resizedImage);
        handleFiles(resizedImage);
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
        if (!prevImg) {
            return null
        }

        return URL.createObjectURL(prevImg)
    }, [prevImg])

    return (
        <div className="flex flex-col space-y-4 pt-4">
            <div
                {...getRootProps()}
                className={`grid items-center text-center gap-4 cursor-pointer h-3/4 p-8 rounded-lg border-dashed border hover:border-gray-300 transition duration-75
      ${isDragActive ? "border-blue-500" : "border-gray-400"}`}
            >
                <input {...getInputProps()} />
                <>
                    {isDragActive ? (
                        <p className="text-sm font-medium leading-none text-center">Drop the file here ...</p>
                    ) : (
                        <>
                            <p className="text-sm font-medium leading-none">
                                Drag and drop your files here
                            </p>
                        </>
                    )}
                </>
            </div>
            <p className="text-xs text-muted-foreground">
                Supported formats: JPG, PNG, JPEG, WEBP
            </p>
            {previewImg &&
                <>
                    <Separator className="dark:bg-zinc-700" />
                    <div className="grid items-center">
                        <DropzonePreview previewImg={previewImg} files={files} />
                    </div>
                </>
            }
        </div>
    );
}

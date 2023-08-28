"use client";

import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { UploadIcon } from "@/icons/UploadIcon";
import { DropzonePreview } from "./DropzonePreview";

export function Dropzone() {
    const [files, setFiles] = useState<File | null>(null);
    const [previewImg, setPreviewImg] = useState("");

    const onDrop = useCallback((files: File[]) => {
        setFiles(files[0]);
        setPreviewImg(URL.createObjectURL(files[0]));
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

    return (
        <div className="w-80 h-min">
            <div
                {...getRootProps()}
                className={`flex flex-col justify-center items-center cursor-pointer w-80 h-60 p-8 rounded-lg border-dashed border hover:border-gray-300 transition-all
      ${isDragActive ? "border-blue-500" : "border-gray-400"}`}
            >
                <input {...getInputProps()} />
                <h1 className="font-bold font-xl text-white text-xl text-center mb-4 mt-2">
                    Upload File
                </h1>
                {isDragActive ? (
                    <p>Drop the files here ...</p>
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
            </div>
            <DropzonePreview previewImg={previewImg} files={files} />
        </div>
    );
}

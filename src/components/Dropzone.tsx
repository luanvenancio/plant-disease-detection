"use client";

import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

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
                ".gif",
                ".jpeg",
                ".tif",
                ".tiff",
                ".jpg",
                ".avif",
                ".webp",
                ".bmp",
            ],
        },
    });

    return (
        <>
            <div
                {...getRootProps()}
                className={`flex flex-col justify-center items-center w-80 h-60 p-8 rounded-lg border-dashed border-2 hover:border-gray-300 transition-all
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
                            Supported formats: JPG, PNG, JPGEG, WEBP
                        </p>
                    </>
                )}
            </div>

            {previewImg && files && (
                <div className="border rounded-lg m-4 p-2 bg-white border-gray-300 flex flex-row">
                    <img className="rounded-lg w-36" src={previewImg} width="200px" />
                    <div className="flex flex-col ml-2 justify-center">
                        <p className="font-semibold">{files.name}</p>
                        <p>{Math.round(files.size / 1000000)} MB</p>
                    </div>
                </div>
            )}
        </>
    );
}

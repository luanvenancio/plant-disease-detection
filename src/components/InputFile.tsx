"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadIcon } from "@/icons/UploadIcon";
import { useCallback, useState } from "react";
import { DropzoneState, useDropzone } from "react-dropzone";

interface HasFileProps {
  file?: File;
  removeFile: () => void;
}

interface InputProps {
  dropzone: DropzoneState;
}

export function InputFile() {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0]);
  }, []);

  const removeFile = useCallback(() => {
    setFile(null);
  }, [file]);

  const dropzone = useDropzone({
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

  if (file) return null;

  return <InputImage dropzone={dropzone} />;
}

const InputImage = ({ dropzone }: InputProps) => {
  const { getRootProps, getInputProps, isDragActive } = dropzone;
  return (
    <div
      {...getRootProps()}
      className={`w-1/2 h-full rounded-lg border-dashed border-4 hover:border-gray-500 bg-white hover:bg-gray-600 transition-all
      ${isDragActive ? "border-blue-500" : "border-gray-600"}`}
    >
      <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
        <div className="flex flex-col items-center justify-center p-5 pb-6 w-full h-full">
          <UploadIcon
            className={
              "w-10 h-10 mn-3 ${isDragActive && 'selection:text-blue-500': 'text-gray-400'}"
            }
          />
          {isDragActive ? (
            <p className="font-bold text-lg text-blue-400">
              Solte para adicionar
            </p>
          ) : (
            <>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </>
          )}
        </div>
      </label>
      <input {...getInputProps()} className="hidden" />
    </div>
  );
};

/*const HasFile = ({ file, removeFile }: HasFileProps) => {
  return (
    <div className="w-1/2 h-full rounded-lg border-dashed border-4 border-gray-600 bg-gray-700 flex justify-center items-center">
      <div className="bg-white w-36 rounded-md shadow-md flex gap-3 items-center justify-center">
        <FileIcon className="w-5 h-5 my-4 ml-4" />
        <span className="text-sm text-gray-500 my-4">{file?.name}</span>
        <button
          type="button"
          onClick={removeFile}
          className="place-self-start mt-1 p-1"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};*/

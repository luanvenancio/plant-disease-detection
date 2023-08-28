interface DropzonePreviewProps {
    previewImg: string;
    files?: File | null;
}

export function DropzonePreview({ previewImg, files }: DropzonePreviewProps) {
    return (
        <>
            {previewImg && files && (
                <div className="border rounded-lg my-6 p-4 bg-white border-gray-300 flex flex-row h-2/5">
                    <img className="rounded-lg w-1/4" src={previewImg} width="200px" />
                    <div className="flex flex-col px-4 justify-center w-3/4">
                        <p className="text-ellipsis overflow-hidden font-semibold">{files.name}</p>
                        <p>{files.size > 1048576 ? `${(files.size / 1048576).toFixed(2)} MB` : `${(files.size / 1024).toFixed(2)} KB`}</p>
                    </div>
                </div>
            )}
        </>
    )
}
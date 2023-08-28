interface DropzonePreviewProps {
    previewImg: string;
    files?: File | null;
}

export function DropzonePreview({ previewImg, files }: DropzonePreviewProps) {
    return (
        <>
            {previewImg && files && (
                <div className="border rounded-lg my-4 p-2 bg-white border-gray-300 flex flex-row">
                    <img className="rounded-lg w-2/5" src={previewImg} width="200px" />
                    <div className="flex flex-col px-4 justify-center w-3/5">
                        <p className="text-ellipsis overflow-hidden font-semibold">{files.name}</p>
                        <p>{files.size > 1048576 ? `${(files.size / 1048576).toFixed(2)} MB` : `${(files.size / 1024).toFixed(2)} KB`}</p>
                    </div>
                </div>
            )}
        </>
    )
}
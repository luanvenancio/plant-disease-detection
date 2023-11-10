import Image from "next/image";
import { Card, CardContent } from "./ui/card";

interface DropzonePreviewProps {
    previewImg: string | null;
    files?: File | null;
}

export function DropzonePreview({ previewImg, files }: DropzonePreviewProps) {
    return (
        <>
            {previewImg && files && (
                <Card className="flex flex-row border bg-card text-card-foreground shadow py-2 pl-2 pr-4 dark:border-zinc-700">
                    <Image alt="Plant Image preview" src={previewImg} width={100} height={100} style={{ borderRadius: '0.5rem' }} />
                    <CardContent className="w-full flex flex-col px-4 justify-center">
                        <p className="text-base text-ellipsis overflow-hidden font-medium">{files.name}</p>
                        <p className="text-sm text-muted-foreground">{files.size > 1048576 ? `${(files.size / 1048576).toFixed(2)} MB` : `${(files.size / 1024).toFixed(2)} KB`}</p>
                    </CardContent>
                </Card >
            )
            }
        </>
    )
}
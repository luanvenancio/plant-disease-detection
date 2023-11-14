"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Dropzone } from "./Dropzone";
import { PlusIcon } from "lucide-react";

type ModalProps = {
    handleImg: (previewImg: File) => void;
}

export default function Modal({ handleImg }: ModalProps) {

    const [files, setFiles] = useState<File | null>(null);
    const [open, setOpen] = useState(false);

    const handleFiles = (files: any) => {
        setFiles(files);
    }

    const handleClick = async (e: any) => {
        e.preventDefault();

        if (!files) {
            return null;
        }

        handleImg(files);
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="text-white bg-violet-600 hover:bg-violet-800"> <PlusIcon size={20} className="mr-1" /> Scan Plant</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-lg dark:bg-card dark:border-border">
                <DialogHeader>
                    <DialogTitle>Upload File</DialogTitle>
                    <DialogDescription>
                        Upload a photo of your plant to help us identify any diseases or pests.
                    </DialogDescription>
                </DialogHeader>
                <Dropzone handleFiles={handleFiles} />
                <DialogFooter>
                    <Button className="text-white bg-violet-600 hover:bg-violet-800" onClick={handleClick} type="submit"> Analyze</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
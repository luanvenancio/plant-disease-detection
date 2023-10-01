import { useState } from "react";
import { Button } from "./ui/button";
import { Plants } from "@/app/plants/columns";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Dropzone } from "./Dropzone"

const API_TOKEN = process.env.HUGGINFACE_API_KEY;

type ModalProps = {
    handleResult: (result: Plants) => void;
    handleImg: (previewImg: string) => void;
}

export default function Modal({ handleResult, handleImg }: ModalProps) {

    const [result, setResult] = useState<Plants>();
    const [files, setFiles] = useState<File | null>(null);
    const [open, setOpen] = useState(false);

    const handleFiles = (file: any) => {
        setFiles(file);
    }

    const handleClick = async (e: any) => {
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
            throw new Error("Failed Code: " + response.status);
        }

        const data = await response.json();

        const [first, ...rest] = data[0].label.split("_");

        const score = data[0].score.toFixed(4);

        const plantAnalysis: Plants = {
            name: first,
            result: rest.join(" "),
            status: "Success",
            score,
            accuracy: score > 0.7 ? "High" : "Low"
        }

        console.log(data[0]);

        setResult(plantAnalysis);
        handleResult(plantAnalysis);
        setOpen(false);

    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Detect plant disease</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Upload File</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <Dropzone handleFiles={handleFiles} />
                <DialogFooter>
                    <Button className="bg-backgroung" onClick={handleClick} type="submit">Analyze</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
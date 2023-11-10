"use client";

import useSWR from "swr";
import { useState } from "react";
import { Button } from "./ui/button";
import { Plants } from "@/app/util/PlantType";
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
import { useToast } from "./ui/use-toast";

const API_TOKEN = process.env.NEXT_PUBLIC_HUGGINFACE_API_KEY;

type ModalProps = {
    handleResult: (result: Plants) => void;
    handleImg: (previewImg: File) => void;
}

export default function Modal({ handleResult, handleImg }: ModalProps) {

    const [result, setResult] = useState<Plants>();
    const [files, setFiles] = useState<File | null>(null);
    const [open, setOpen] = useState(false);
    const [shouldFetch, setShouldFetch] = useState(false);
    const { toast } = useToast();

    const fetcher = async (url: string) => {

        const response = await fetch(
            url,
            {
                headers: { Authorization: `Bearer ${API_TOKEN}` },
                method: "POST",
                body: files,
            }
        );

        if (!response.ok) {
            throw new Error('An error occurred while fetching the data. Code: ' + response.status);
        }

        const data = await response.json();
        return data;
    };

    const handleFiles = (files: any) => {
        setFiles(files);
    }

    const { data, error } = useSWR(shouldFetch ? "https://api-inference.huggingface.co/models/surgeonwz/plant-village" : null, fetcher, {
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            if (error.status === 404) return
            if (retryCount >= 8) return
            setTimeout(() => revalidate({ retryCount }), 3000)
        }
    });

    const handleClick = async (e: any) => {
        e.preventDefault();

        if (!files) {
            return null;
        }

        setShouldFetch(true);

        setOpen(false);

        if (error) return <div>`Request Failed: ${error}`</div>;
        if (!data) return toast({ title: "Analysing...", description: "Processing your request.", });

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
        handleImg(files);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="text-white bg-violet-600 hover:bg-violet-800"> <PlusIcon size={20} className="mr-1" /> Detect plant disease</Button>
            </DialogTrigger>
            <DialogContent className="dark:bg-card sm:max-w-md">
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
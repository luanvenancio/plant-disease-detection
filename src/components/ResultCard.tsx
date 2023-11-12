"use client"

import Image from "next/image";
import { Plants } from "@/app/util/PlantType";
import { Card } from "./ui/card";
import { useState, useEffect } from "react";
import useSWR from "swr";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"

const API_TOKEN = process.env.NEXT_PUBLIC_HUGGINFACE_API_KEY;

type ResultProps = {
    img: File;
}

export function ResultCard({ img }: ResultProps) {

    const [shouldFetch, setShouldFetch] = useState(false);

    useEffect(() => {
        setShouldFetch(true);
    }, []);

    const fetcher = async (url: string) => {

        console.log("entrei");
        const response = await fetch(
            url,
            {
                headers: { Authorization: `Bearer ${API_TOKEN}` },
                method: "POST",
                body: img,
            }
        );

        if (!response.ok) {
            throw new Error('An error occurred while fetching the data. Code: ' + response.status);
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
        return plantAnalysis;
    };

    const { data, error } = useSWR(shouldFetch ? "https://api-inference.huggingface.co/models/surgeonwz/plant-village" : null, fetcher, {
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            if (error.status === 404) return
            if (retryCount >= 8) return
            setTimeout(() => revalidate({ retryCount }), 3000)
        },
        suspense: true
    });

    if (error) return <div>`Request Failed: ${error}`</div>;

    console.log(data);

    return (
        <>
            {data && (
                <Card className="w-[512px] border bg-card dark:border-border">
                    <CardHeader>
                        <CardTitle>Result</CardTitle>
                    </CardHeader>
                    <div className="flex justify-center">
                        <Image
                            alt="Plant Image preview"
                            src={URL.createObjectURL(img)}
                            width={256}
                            height={256}
                            style={{
                                borderRadius: '0.5rem',
                                marginTop: '1.5rem',
                                marginBottom: '1.5rem'
                            }}
                        />
                    </div>
                    <CardContent className="bg-secondary dark:bg-secondary mx-4 mb-4 rounded-lg">
                        <div className="pt-4 flex justify-between items-center w-full">
                            <div>
                                <p className="text-sm font-medium">{data.name}</p>
                                <p className="text-md font-semibold">{data.result}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Reliability</p>
                                <p className="text-sm">{data.accuracy}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card >
            )}
        </>
    )
}
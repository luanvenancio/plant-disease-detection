import { Plants } from "@/app/util/PlantType";
import Image from "next/image";
import { Card } from "./ui/card";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Separator } from "./ui/separator";

type ResultProps = {
    result: Plants;
    img: string;
}

export function ResultCard({ result, img }: ResultProps) {
    return (
        <Card className="w-[512px] border dark:border-zinc-700">
            <CardHeader className="border-b dark:border-zinc-700">
                <CardTitle>Result</CardTitle>
            </CardHeader>
            <div className="flex justify-center">
                <Image
                    alt="Plant Image preview"
                    src={img}
                    width={256}
                    height={256}
                    style={{
                        borderRadius: '0.5rem',
                        marginTop: '1.5rem',
                        marginBottom: '1.5rem'
                    }}
                />
            </div>
            <CardContent className="border-t dark:border-zinc-700">
                <div className="pt-4 flex justify-between items-center w-full">
                    <div>
                        <p className="text-sm font-medium">{result.name}</p>
                        <p className="text-md font-semibold">{result.result}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Reliability</p>
                        <p className="text-sm">{result.accuracy}</p>
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}
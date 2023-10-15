import { Card } from "./ui/card";

type Plants = {
    name: string
    result: string
    status: "Pending" | "Analysing" | "Success" | "Failed"
    score: number
    accuracy: "High" | "Medium" | "Low"
}

export function ResultCard({ name, result, accuracy }: Plants) {

    return (
        <Card className="w-[340px] flex items-center">
            <div className="p-4 flex justify-between items-center w-full">
                <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-md font-semibold">{result}</p>
                </div>
                <div>
                    <p className="text-sm">{accuracy}</p>
                </div>
            </div>
        </Card>
    )
}
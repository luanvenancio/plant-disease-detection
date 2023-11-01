export type Plants = {
    //id: string
    name: string
    result: string
    status: "Pending" | "Analysing" | "Success" | "Failed"
    score: number
    accuracy: "High" | "Medium" | "Low"
}
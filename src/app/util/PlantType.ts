export type Plants = {
    //id: string
    name: string
    diagnosis: string
    status: "Pending" | "Analysing" | "Success" | "Failed"
    score: number
    accuracy: "High" | "Medium" | "Low"
}
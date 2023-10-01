"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Plants = {
    //id: string
    name: string
    result: string
    status: "Pending" | "Analysing" | "Success" | "Failed"
    score: number
    accuracy: "High" | "Medium" | "Low"
}

export const columns: ColumnDef<Plants>[] = [
    {
        accessorKey: "result",
        header: "Diagnosis",
    },
    {
        accessorKey: "name",
        header: "Plant Name",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "score",
        header: "Score",
    },
    {
        accessorKey: "accuracy",
        header: "Accuracy",
    },
]

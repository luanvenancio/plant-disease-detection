import { Plants, columns } from "./columns"
import { DataTable } from "./data-table"

/*async function getData(): Promise<Plants[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // ...
    ]
}*/

export default function DataTablePage(props: Plants) {
    const data = [
        {
            name: props.name,
            result: props.result,
            status: props.status,
            score: props.score,
            accuracy: props.accuracy
        }
    ]

    return (
        <div className="grid items-center">
            <DataTable columns={columns} data={data} />
        </div>
    )
}

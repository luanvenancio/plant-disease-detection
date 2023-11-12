import { Skeleton } from "@/components/ui/skeleton"

export function ResultCardSkeleton() {
    return (
        <div className="w-[512px] flex flex-col items-center space-y-4 p-4 border rounded-xl bg-card dark:border-border">
            <Skeleton className="w-full h-8 self-start" />
            <Skeleton className="w-[250px] h-[250px]" />
            <Skeleton className="w-full h-12" />
        </div>
    )
}

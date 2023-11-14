import { Skeleton } from "@/components/ui/skeleton"

export function ResultCardSkeleton() {
    return (
        <div className="w-[512px] flex flex-col items-center space-y-6 px-4 py-8 border rounded-xl bg-card dark:border-border">
            <Skeleton className="w-3/5 h-8 self-start rounded-2xl" />
            <Skeleton className="w-[250px] h-[250px]" />
            <Skeleton className="w-full h-24" />
        </div>
    )
}

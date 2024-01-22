import { Skeleton } from "@/components/ui/skeleton"

const TokenCardSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Skeleton className="h-60 bg-background" />
      <Skeleton className="h-60 bg-background" />
      <Skeleton className="h-60 bg-background" />
      <Skeleton className="h-60 bg-background" />
      <Skeleton className="h-60 bg-background" />
      <Skeleton className="h-60 bg-background" />
      <Skeleton className="h-60 bg-background" />
      <Skeleton className="h-60 bg-background" />
    </div>
  )
}
export default TokenCardSkeleton

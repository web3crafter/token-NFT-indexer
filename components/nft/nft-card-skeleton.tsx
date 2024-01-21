import { Skeleton } from "@/components/ui/skeleton"

const NftCardSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-4 gap-4">
      <Skeleton className="h-96 bg-background" />
      <Skeleton className="h-96 bg-background" />
      <Skeleton className="h-96 bg-background" />
      <Skeleton className="h-96 bg-background" />
      <Skeleton className="h-96 bg-background" />
      <Skeleton className="h-96 bg-background" />
      <Skeleton className="h-96 bg-background" />
      <Skeleton className="h-96 bg-background" />
    </div>
  )
}
export default NftCardSkeleton

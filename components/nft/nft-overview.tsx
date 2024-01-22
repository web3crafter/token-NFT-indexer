"use client"

import NftCard from "@/components/nft/nft-card"
import NftCardSkeleton from "@/components/nft/nft-card-skeleton"
import { useGetChainId } from "@/hooks/useGetChainId"
import { useGetNftsForAddress } from "@/hooks/useGetNftsForAddress"
import { useEffect } from "react"

interface NftsOverviewProps {
  address: string
}

const NftsOverview = ({ address }: NftsOverviewProps) => {
  const { chainId } = useGetChainId()
  const { data, status, refetch, isLoading, isRefetching } =
    useGetNftsForAddress({
      address: address,
      chainId: chainId,
      isEnabled: true,
    })

  useEffect(() => {
    refetch()
  }, [chainId, refetch])

  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="flex flex-col items-center w-full gap-4 sm:p-8 p-2 rounded-lg bg-secondary">
        {status === "success" && !data?.ownedNfts?.length && (
          <div>
            <p className="text-lg text-muted-foreground">No NFTS found</p>
          </div>
        )}

        {isLoading || isRefetching ? (
          <NftCardSkeleton />
        ) : (
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data?.ownedNfts.map((nft) => {
              return <NftCard key={nft.tokenId} nft={nft} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}
export default NftsOverview

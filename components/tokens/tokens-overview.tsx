"use client"

import TokenCard from "@/components/tokens/token-card"
import TokenCardSkeleton from "@/components/tokens/token-card-skeleton"
import { useGetChainId } from "@/hooks/useGetChainId"
import { useGetTokensForAddress } from "@/hooks/usegetTokensForAddress"
import { useEffect } from "react"

interface TokensOverviewProps {
  address: string
}

const TokensOverview = ({ address }: TokensOverviewProps) => {
  const { chainId } = useGetChainId()
  const { data, status, isLoading, isError, refetch, isRefetching } =
    useGetTokensForAddress({
      address: address,
      chainId: chainId,
      isEnabled: true,
    })
  const tokens = data?.tokens

  useEffect(() => {
    refetch()
  }, [chainId, refetch])

  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="flex flex-col items-center w-full gap-4 p-8 rounded-lg bg-secondary">
        {status === "success" && !tokens?.length && (
          <div>
            <p className="text-lg text-muted-foreground">No tokens found</p>
          </div>
        )}
        {isLoading || isRefetching ? (
          <TokenCardSkeleton />
        ) : (
          <div className="grid w-full grid-cols-4 gap-4">
            {tokens?.map((token) => {
              return <TokenCard key={token.contractAddress} token={token} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}
export default TokensOverview

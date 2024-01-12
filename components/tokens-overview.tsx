"use client"

import { Skeleton } from "@/components/ui/skeleton"
import TokenCard from "@/components/token-card"
import TokenCardSkeleton from "@/components/token-card-skeleton"
import NativeTokenCard from "@/components/native-token-card"
import { Token } from "@/schemas/tokensForOvnerSchema"

interface TokensOverviewProps {
  tokens: Token[] | undefined
  isLoadingTokens: boolean
  statusTokens: "error" | "success" | "pending"
  isRefetchingTokens?: boolean
}

const TokensOverview = ({
  tokens,
  isLoadingTokens,
  statusTokens,
  isRefetchingTokens,
}: TokensOverviewProps) => {
  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="flex flex-col items-center w-full gap-4 p-8 rounded-lg bg-secondary">
        <NativeTokenCard />

        {statusTokens === "success" && !tokens?.length && (
          <div>
            <p className="text-lg text-muted-foreground">No tokens found</p>
          </div>
        )}
        {isLoadingTokens || isRefetchingTokens ? (
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

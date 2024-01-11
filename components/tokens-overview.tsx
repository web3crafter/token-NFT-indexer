"use client"

import { Skeleton } from "@/components/ui/skeleton"
import TokenCard from "@/components/token-card"
import TokenCardSkeleton from "@/components/token-card-skeleton"
import NativeTokenCard from "@/components/native-token-card"
import { GetTokensOptions } from "@/types/tokens"
import { Dispatch, SetStateAction } from "react"
import { Token } from "@/schemas/tokensForOvnerSchema"

export type EthToken = {
  symbol: string | undefined
  balance: string | undefined
  logo: string
}

interface TokensOverviewProps {
  isLoadingEthBalance: boolean
  ethToken: EthToken
  tokens: Token[] | undefined
  isLoadingTokens: boolean
  statusGetTokens: "error" | "success" | "pending"
  isRefetchingTokens: boolean
}

const TokensOverview = ({
  ethToken,
  isLoadingEthBalance,
  tokens,
  isLoadingTokens,
  statusGetTokens,
  isRefetchingTokens,
}: TokensOverviewProps) => {
  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="flex flex-col items-center w-full gap-4 p-8 rounded-lg bg-secondary">
        {isLoadingEthBalance ? (
          <Skeleton className="h-16 bg-background w-60" />
        ) : (
          <NativeTokenCard token={ethToken} />
        )}
        {statusGetTokens === "success" && !tokens?.length && (
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

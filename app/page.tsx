"use client"

import SearchTokens from "@/app/_components/search-tokens"
import TokensOverview from "@/components/tokens-overview"
import { useGetTokensForAddress } from "@/hooks/usegetTokensForAddress"
import { GetTokensOptions } from "@/types/tokens"
import { useState } from "react"
import { useBalance } from "wagmi"

export default function Home() {
  const [getTokensOptions, setGetTokensOptions] = useState<GetTokensOptions>({
    address: "",
    isEnabled: false,
  })

  const {
    data,
    status: statusGetTokens,
    isLoading: isLoadingTokens,
    refetch: refetchTokens,
    isRefetching: isRefetchingTokens,
  } = useGetTokensForAddress(getTokensOptions)
  const tokens = data?.tokens

  const {
    data: ethData,
    isLoading: isLoadingEthBalance,
    refetch: refetchEthBalance,
  } = useBalance({
    address: getTokensOptions.address as `0x${string}`,
  })

  const ethToken = {
    symbol: ethData?.symbol,
    balance: ethData?.formatted,
    logo: "/eth_logo.png",
  }
  return (
    <main className="container flex flex-col items-center gap-8 my-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold">Token Indexer</h1>
        <p>
          Plug in an address and this website will return all of its ERC-20
          token balances!
        </p>
        <SearchTokens
          getTokensOptions={getTokensOptions}
          setGetTokensOptions={setGetTokensOptions}
          refetchTokens={refetchTokens}
          refetchEthBalance={refetchEthBalance}
        />
      </div>

      <TokensOverview
        ethToken={ethToken}
        isLoadingEthBalance={isLoadingEthBalance}
        isLoadingTokens={isLoadingTokens}
        tokens={tokens}
        statusGetTokens={statusGetTokens}
        isRefetchingTokens={isRefetchingTokens}
      />
    </main>
  )
}

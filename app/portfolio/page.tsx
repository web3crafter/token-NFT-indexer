"use client"

import TokensOverview from "@/components/tokens-overview"
import { useGetTokensForOwner } from "@/hooks/useGetTokensForOwner"
import { useAccount, useBalance } from "wagmi"

const PortfolioPage = () => {
  const { address, status: connectedWalletStatus } = useAccount()

  const {
    data,
    status: statusGetTokens,
    isLoading: isLoadingTokens,
    isRefetching: isRefetchingTokens,
  } = useGetTokensForOwner({ address: address as string, isEnabled: true })
  const tokens = data?.tokens

  const { data: ethData, isLoading: isLoadingEthBalance } = useBalance({
    address: address as `0x${string}`,
  })

  const ethToken = {
    symbol: ethData?.symbol,
    balance: ethData?.formatted,
    logo: "/eth_logo.png",
  }
  return (
    <main className="container flex flex-col items-center gap-8 my-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
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
export default PortfolioPage

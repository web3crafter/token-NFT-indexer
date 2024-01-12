"use client"

import TokensOverview from "@/components/tokens-overview"
import { useGetTokensForOwner } from "@/hooks/useGetTokensForOwner"
import { useAccount, useNetwork } from "wagmi"

const PortfolioPage = () => {
  const { address } = useAccount()
  const { chain } = useNetwork()

  const {
    data,
    status: statusTokens,
    isLoading: isLoadingTokens,
  } = useGetTokensForOwner({
    address: address as string,
    chainId: chain?.id,
    isEnabled: true,
  })
  const tokens = data?.tokens

  return (
    <main className="container flex flex-col items-center gap-8 my-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
      </div>
      <TokensOverview
        tokens={tokens}
        isLoadingTokens={isLoadingTokens}
        statusTokens={statusTokens}
      />
    </main>
  )
}
export default PortfolioPage

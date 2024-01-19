"use client"

import { useEffect, useState } from "react"
import { useAccount } from "wagmi"

import { useGetChainId } from "@/hooks/useGetChainId"
import { useGetTokensForOwner } from "@/hooks/useGetTokensForOwner"

import NotConnected from "@/app/portfolio/_components/not-connected"
import NativeTokenCard from "@/components/native-token-card"
import TokensOverview from "@/components/tokens-overview"

const PortfolioPage = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const { chainId } = useGetChainId()
  const { address, status: connectedWalletStatus } = useAccount()

  const {
    data,
    status: statusTokens,
    isLoading: isLoadingTokens,
    refetch,
  } = useGetTokensForOwner({
    address: address as string,
    chainId: chainId,
    isEnabled: isEnabled,
  })
  const tokens = data?.tokens

  useEffect(() => {
    if (connectedWalletStatus === "connected") {
      setIsEnabled(true)
      refetch()
    }
  }, [chainId, connectedWalletStatus, refetch])

  return (
    <main className="container flex flex-col items-center gap-8 my-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
      </div>
      {connectedWalletStatus === "disconnected" ? (
        <NotConnected />
      ) : (
        <>
          <NativeTokenCard address={address as string} />
          <TokensOverview
            tokens={tokens}
            isLoadingTokens={isLoadingTokens}
            statusTokens={statusTokens}
          />
        </>
      )}
    </main>
  )
}
export default PortfolioPage

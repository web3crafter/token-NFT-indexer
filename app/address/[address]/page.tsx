"use client"
import { useEffect } from "react"
import { useAccount } from "wagmi"

import { formatAddress } from "@/lib/utils"
import { getChainInfo } from "@/lib/getChainInfo"

import { useGetTokensForAddress } from "@/hooks/usegetTokensForAddress"

import TokensOverview from "@/components/tokens-overview"
import ChainButton from "@/components/buttons/chain-button"
import NativeTokenCard from "@/components/native-token-card"
import { useGetChainId } from "@/hooks/useGetChainId"

const AddressPage = ({ params }: { params: { address: string } }) => {
  const { address } = params
  const { chainId } = useGetChainId()

  const { status: connectedWalletStatus } = useAccount()

  const chainData = getChainInfo(chainId)

  const {
    data,
    status: statusTokens,
    isLoading: isLoadingTokens,
    isError,
    refetch,
  } = useGetTokensForAddress({
    address: address,
    chainId: chainData.id,
    isEnabled: true,
  })
  const tokens = data?.tokens

  useEffect(() => {
    refetch()
  }, [chainData.id, refetch])

  return (
    <main className="container flex flex-col items-center gap-8 my-12">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-semibold">
          {formatAddress(params.address)}
        </h1>
        {connectedWalletStatus === "disconnected" && <ChainButton />}
      </div>
      {isError ? (
        <p>Error</p>
      ) : (
        <>
          <NativeTokenCard address={address} />
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
export default AddressPage

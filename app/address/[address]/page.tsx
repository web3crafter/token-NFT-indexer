"use client"

import { useAccount, useBalance, useNetwork } from "wagmi"

import { useGetTokensForAddress } from "@/hooks/usegetTokensForAddress"

import TokensOverview from "@/components/tokens-overview"
import { formatAddress } from "@/lib/utils"
import { useEffect, useState } from "react"

const AddressPage = ({ params }: { params: { address: string } }) => {
  const { address } = params
  const { chain } = useNetwork()

  const {
    data,
    status: statusGetTokens,
    isLoading: isLoadingTokens,
    isError,
  } = useGetTokensForAddress({
    address: address,
    chainId: chain?.id,
    isEnabled: true,
  })
  const tokens = data?.tokens

  const { data: nativeTokenData, isLoading: isLoadingEthBalance } = useBalance({
    address: address as `0x${string}`,
  })

  const nativeToken = {
    symbol: nativeTokenData?.symbol,
    balance: nativeTokenData?.formatted,
    logo: chain?.id === 1 ? "/eth_logo.png" : "/arb-logo.png",
  }

  return (
    <main className="container flex flex-col items-center gap-8 my-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold">
          {formatAddress(params.address)}
        </h1>
      </div>
      {isError ? (
        <p>Error</p>
      ) : (
        <TokensOverview
          nativeToken={nativeToken}
          isLoadingEthBalance={isLoadingEthBalance}
          isLoadingTokens={isLoadingTokens}
          tokens={tokens}
          statusGetTokens={statusGetTokens}
        />
      )}
    </main>
  )
}
export default AddressPage

"use client"

import { useBalance } from "wagmi"

import { useGetTokensForAddress } from "@/hooks/usegetTokensForAddress"

import TokensOverview from "@/components/tokens-overview"
import { formatAddress } from "@/lib/utils"

const AddressPage = ({ params }: { params: { address: string } }) => {
  const { address } = params

  const {
    data,
    status: statusGetTokens,
    isLoading: isLoadingTokens,
    isError,
  } = useGetTokensForAddress({ address: address, isEnabled: true })
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
        <h1 className="text-3xl font-semibold">
          {formatAddress(params.address)}
        </h1>
      </div>
      {isError ? (
        <p>Error</p>
      ) : (
        <TokensOverview
          ethToken={ethToken}
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

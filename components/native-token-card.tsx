"use client"

import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import { useAccount, useBalance } from "wagmi"

export type NativeToken = {
  symbol: string | undefined
  balance: string | undefined
  logo: string
}

const NativeTokenCard = () => {
  const { address, status: connectedWalletStatus } = useAccount()
  const { data: nativeTokenData, isLoading: isLoadingEthBalance } = useBalance({
    address: address as `0x${string}`,
  })

  const nativeToken: NativeToken = {
    symbol: nativeTokenData?.symbol,
    balance: nativeTokenData?.formatted,
    logo: nativeTokenData?.symbol === "ETH" ? "/eth_logo.png" : "/arb-logo.png",
  }

  return (
    <>
      {isLoadingEthBalance ? (
        <Skeleton className="h-16 bg-background w-60" />
      ) : (
        <Card className="flex gap-4 p-4">
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8 overflow-hidden rounded-full">
              {nativeToken.logo ? (
                <Image
                  src={nativeToken.logo}
                  alt="logo"
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="absolute flex items-center justify-center w-full h-full bg-secondary">
                  X
                </div>
              )}
            </div>
            <p className="">
              {nativeToken.balance} {nativeToken.symbol}
            </p>
          </div>
        </Card>
      )}
    </>
  )
}
export default NativeTokenCard

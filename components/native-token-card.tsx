"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useBalance } from "wagmi"

import { getChainInfo } from "@/lib/getChainInfo"
import { useGetChainId } from "@/hooks/useGetChainId"

import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export type NativeToken = {
  symbol: string | undefined
  balance: string | undefined
  logo: string
}

interface NativeTokenCardProps {
  address: string
}

const NativeTokenCard = ({ address }: NativeTokenCardProps) => {
  const { chainId } = useGetChainId()

  const chainData = getChainInfo(chainId)

  const {
    data: nativeTokenData,
    isLoading: isLoadingEthBalance,
    refetch,
  } = useBalance({
    address: address as `0x${string}`,
    chainId: chainData.id,
  })

  const [nativeToken, setNativeToken] = useState<NativeToken>({
    symbol: nativeTokenData?.symbol,
    balance: nativeTokenData?.formatted,
    logo: nativeTokenData?.symbol === "ETH" ? "/eth_logo.png" : "/arb-logo.png",
  })

  useEffect(() => {
    refetch()
    setNativeToken({
      symbol: chainData.symbol.toUpperCase(),
      balance: nativeTokenData?.formatted,
      logo: chainData.logo,
    })
  }, [chainData.id, nativeTokenData])

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

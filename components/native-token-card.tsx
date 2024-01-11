"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

interface EthCardProps {
  token: {
    symbol: string | undefined
    balance: string | undefined
    logo: string
  }
}

const NativeTokenCard = ({ token }: EthCardProps) => {
  return (
    <Card className="flex gap-4 p-4">
      <div className="flex items-center gap-4">
        <div className="relative w-8 h-8 overflow-hidden rounded-full">
          {token.logo ? (
            <Image
              src={token.logo}
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
          {token.balance} {token.symbol}
        </p>
      </div>
    </Card>
  )
}
export default NativeTokenCard

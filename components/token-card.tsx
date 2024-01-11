"use client"
import Image from "next/image"
import Link from "next/link"

import { formatAddress } from "@/lib/utils"

import { Card } from "@/components/ui/card"
import { Token } from "@/schemas/tokensForOvnerSchema"
import { ExternalLink } from "lucide-react"

interface TokenCardProps {
  token: Token
}

const TokenCard = ({ token }: TokenCardProps) => {
  return (
    <Card
      key={token.contractAddress}
      className="flex flex-col items-center justify-between p-4 h-60"
    >
      <p className="text-xl font-semibold">{token.name}</p>
      <div className="relative w-10 h-10 overflow-hidden rounded-full ">
        {token.logo ? (
          <Image src={token.logo} alt="logo" fill className="object-contain" />
        ) : (
          <div className="absolute flex items-center justify-center w-full h-full bg-secondary">
            X
          </div>
        )}
      </div>
      <div className="flex gap-1">
        <p>{token.balance}</p>
        <p className="">{token.symbol}</p>
      </div>
      <div className="flex items-center gap-1">
        <Link
          href={`https://etherscan.io/address/${token.contractAddress}`}
          className="text-blue-600 dark:text-blue-500"
        >
          {formatAddress(token.contractAddress)}
        </Link>
        <ExternalLink className="w-5 h-5 text-muted-foreground" />
      </div>
    </Card>
  )
}
export default TokenCard

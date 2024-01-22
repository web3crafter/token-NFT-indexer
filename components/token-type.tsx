"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import NftsOverview from "@/components/nft/nft-overview"
import TokensOverview from "@/components/tokens/tokens-overview"

interface TokenTypeProps {
  address: string
}
const TokenType = ({ address }: TokenTypeProps) => {
  const [nft, setNft] = useState(false)

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <div className="flex items-center self-start p-1 rounded-lg bg-secondary">
        <Button
          onClick={() => setNft(false)}
          variant={nft ? "secondary" : "default"}
        >
          Tokens
        </Button>
        <Button
          onClick={() => setNft(true)}
          variant={nft ? "default" : "secondary"}
        >
          NFTS
        </Button>
      </div>
      <div className="flex flex-col items-center w-full gap-4 lg:p-8 rounded-lg bg-secondary">
        {nft ? (
          <NftsOverview address={address} />
        ) : (
          <TokensOverview address={address} />
        )}
      </div>
    </div>
  )
}
export default TokenType

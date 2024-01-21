"use client"
import Image from "next/image"
import Link from "next/link"
import { OwnedNft } from "alchemy-sdk"
import { ExternalLink } from "lucide-react"

import { formatAddress } from "@/lib/utils"

import { Card } from "@/components/ui/card"

interface NftCardProps {
  nft: OwnedNft
}

const NftCard = ({ nft }: NftCardProps) => {
  return (
    <Card className="flex flex-col items-center justify-between p-4 gap-2">
      <p className="text-xl font-semibold">
        {nft.contract.openSeaMetadata.collectionName}
      </p>
      <div className="relative w-60 h-60 overflow-hidden rounded-xl ">
        {nft.image.cachedUrl ? (
          <Image
            src={nft.image.cachedUrl}
            alt="logo"
            fill
            className="object-contain"
          />
        ) : (
          <div className="absolute flex items-center justify-center w-full h-full bg-secondary">
            Image not found
          </div>
        )}
      </div>
      <p className="">{nft.name}</p>
      <div className="flex items-center gap-1">
        <Link
          href={`https://etherscan.io/address/${nft.contract.address}`}
          className="text-blue-600 dark:text-blue-500"
          target="_blank"
        >
          {formatAddress(nft.contract.address)}
        </Link>
        <ExternalLink className="w-5 h-5 text-muted-foreground" />
      </div>
    </Card>
  )
}
export default NftCard

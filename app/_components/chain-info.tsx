"use client"

import Socials from "@/components/socials"
import { Card } from "@/components/ui/card"
import { Icons } from "@/constants/icons"
import { useGetChainData } from "@/hooks/useGetChainData"
import { Social } from "@/types/sosial"
import { Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useAccount } from "wagmi"

export type ChainDataParams = {
  chainName: string | undefined
  isEnabled: boolean
}

const ChainInfo = () => {
  const { connector } = useAccount()
  const [chainDataParams, setChainDataParams] = useState<ChainDataParams>({
    chainName: "",
    isEnabled: false,
  })

  useEffect(() => {
    if (connector !== undefined) {
      setChainDataParams({
        chainName: connector?.chains[0].name,
        isEnabled: true,
      })
    }
  }, [connector])

  const { data } = useGetChainData(chainDataParams)

  if (!data) return null

  const chainSocials: Social[] = [
    {
      href: data.links.homepage[0],
      icon: Home,
    },
    {
      href: data.links.repos_url.github[0],
      icon: Icons.gitHub,
    },
    {
      href: `https://twitter.com/${data.links.twitter_screen_name}`,
      icon: Icons.twitter,
      className: "h-4 w-4",
    },
  ]

  const rawDescription = data.description.en.split(".")

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Card className="flex items-center justify-center">
        <div className="relative h-56 w-36">
          {data?.image && (
            <Image
              src={data?.image.large}
              alt="chain logo"
              fill
              className="object-contain"
            />
          )}
        </div>

        <div className="flex flex-col h-full gap-4 p-4 text-center">
          <h3 className="text-xl font-semibold">{data?.name}</h3>

          <div>
            <p className="font-semibold">Price</p>
            <p className="text-lg">{data?.market_data.current_price.usd} $</p>
          </div>

          <div>
            <p className="font-semibold">Market cap</p>
            <p className="text-lg">{data?.market_data.market_cap.usd} $</p>
          </div>

          <div>
            <p className="font-semibold">market cap rank</p>
            <p className="text-lg"># {data?.market_cap_rank}</p>
          </div>
          <Socials socials={chainSocials} />
        </div>
      </Card>

      <Card className="flex flex-col w-2/3 gap-2 p-4 text-center">
        <h1 className="text-2xl font-semibold">What is {data.name}?</h1>
        <div>
          {rawDescription.map((sentence, i) => (
            <p key={i}>{sentence}.</p>
          ))}
        </div>
      </Card>
    </div>
  )
}
export default ChainInfo

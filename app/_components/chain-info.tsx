"use client"

import Image from "next/image"
import { useEffect } from "react"
import { Home } from "lucide-react"

import { Social } from "@/types/sosial"
import { Icons } from "@/constants/icons"

import { useGetChainDataFromCoinGecko } from "@/hooks/useGetChainDataFromCoinGecko"
import { useGetChainId } from "@/hooks/useGetChainId"

import { Card } from "@/components/ui/card"
import Socials from "@/components/socials"
import { cn } from "@/lib/utils"

const ChainInfo = () => {
  const { chainId } = useGetChainId()

  const { data, refetch } = useGetChainDataFromCoinGecko({
    chainId: chainId,
    isEnabled: true,
  })

  useEffect(() => {
    refetch()
  }, [chainId, refetch])

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
      <Card className="grid sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 w-full max-w-lg">
        <div className="h-full p-2 rounded-md flex items-center justify-center rounded-r-none bg-secondary">
          <div
            className={cn(
              data.image.large.includes("16547")
                ? "relative w-56 h-56 rounded-full border-2 border-white"
                : "relative w-56 h-full"
            )}
          >
            {data?.image && (
              <Image
                src={data?.image.large}
                alt="chain logo"
                fill
                className={cn(
                  "object-cover",
                  data.image.large.includes("16547") && "rounded-full"
                )}
              />
            )}
          </div>
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
          <div className="flex w-full justify-center">
            <Socials socials={chainSocials} />
          </div>
        </div>
      </Card>

      <Card className="flex flex-col max-w-4xl gap-2 p-4 text-center">
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

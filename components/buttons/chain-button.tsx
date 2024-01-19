"use client"

import Image from "next/image"
import { useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"
import { ARB_CHAIN, ETH_CHAIN } from "@/constants/chains"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { getChainInfo } from "@/lib/getChainInfo"
import { useAccount } from "wagmi"
import { useGetChainId } from "@/hooks/useGetChainId"

const ChainButton = () => {
  const { isConnected } = useAccount()
  const { chainId, params, pathName } = useGetChainId()
  const router = useRouter()
  const chainData = getChainInfo(chainId)

  const switchChain = (chainId: number) => {
    params.set("chainId", chainId.toString())
    router.replace(`${pathName}?${params}`)
  }

  if (isConnected) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="flex gap-2 px-2">
          <div className="relative w-5 h-5 overflow-hidden rounded-full">
            <Image
              src={chainData.logo}
              alt="eth logo"
              fill
              className="object-cover"
            />
          </div>
          <ChevronDown className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex items-center justify-center">
        <div className="flex flex-col w-full gap-2 mt-4">
          <p className="text-xl">Switch Network</p>

          {/* ETH Button */}
          <DialogTrigger asChild>
            <Button
              variant={chainId === ETH_CHAIN.id ? "default" : "secondary"}
              className="flex justify-between w-full"
              onClick={() => switchChain(ETH_CHAIN.id)}
            >
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6 overflow-hidden rounded-full bg-secondary">
                  <Image
                    src={ETH_CHAIN.logo}
                    alt="eth logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="capitalize">{ETH_CHAIN.name}</p>
              </div>
              {chainId === ETH_CHAIN.id && (
                <div className="flex items-center gap-1">
                  <p>Active</p>
                </div>
              )}
            </Button>
          </DialogTrigger>

          {/* ARB Button */}
          <DialogTrigger asChild>
            <Button
              variant={chainId === ARB_CHAIN.id ? "default" : "secondary"}
              className={cn("flex justify-between w-full")}
              onClick={() => switchChain(ARB_CHAIN.id)}
            >
              <div className="flex gap-2">
                <div className="relative w-6 h-6 overflow-hidden rounded-full">
                  <Image
                    src={ARB_CHAIN.logo}
                    alt="arb logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="capitalize">{ARB_CHAIN.name}</p>
              </div>
              {chainId === ARB_CHAIN.id && (
                <div className="flex items-center gap-1">
                  <p>Active</p>
                </div>
              )}
            </Button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default ChainButton

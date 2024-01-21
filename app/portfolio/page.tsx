"use client"

import { useAccount } from "wagmi"

import NotConnected from "@/app/portfolio/_components/not-connected"
import NativeTokenCard from "@/components/native-token-card"
import TokenType from "@/components/token-type"

const PortfolioPage = () => {
  const { address, status: connectedWalletStatus } = useAccount()

  return (
    <main className="container flex flex-col items-center gap-8 my-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        {connectedWalletStatus === "connected" && (
          <NativeTokenCard address={address as string} />
        )}
      </div>
      {connectedWalletStatus === "disconnected" ? (
        <NotConnected />
      ) : (
        <TokenType address={address as string} />
      )}
    </main>
  )
}
export default PortfolioPage

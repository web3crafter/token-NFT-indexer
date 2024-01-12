"use client"

import "@rainbow-me/rainbowkit/styles.css"
import { arbitrum, mainnet } from "viem/chains"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import {
  RainbowKitProvider,
  getDefaultWallets,
  midnightTheme,
} from "@rainbow-me/rainbowkit"

import { useIsMounted } from "@/hooks/useIsMounted"

import Avatar from "@/components/avatar"

const { chains, publicClient } = configureChains(
  [mainnet, arbitrum],
  [publicProvider()]
)

const appInfo = {
  appName: "Token Indexer",
}

const { connectors } = getDefaultWallets({
  appName: appInfo.appName,
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,
  chains: [mainnet, arbitrum],
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const WagmiRainbowProvider = ({ children }: { children: React.ReactNode }) => {
  const isMounted = useIsMounted()
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={appInfo}
        avatar={Avatar}
        theme={midnightTheme({})}
        coolMode
      >
        {isMounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default WagmiRainbowProvider

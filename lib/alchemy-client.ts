import { Alchemy, Network } from "alchemy-sdk"

const getAlchemySettings = (chainId: number) => {
  if (chainId === 42161) {
    return {
      apiKey: process.env.NEXT_PUBLIC_ARB_API_KEY,
      network: Network.ARB_MAINNET,
    }
  } else {
    return {
      apiKey: process.env.NEXT_PUBLIC_ETH_API_KEY,
      network: Network.ETH_MAINNET,
    }
  }
}

export const alchemyClient = (chainId: number) => {
  return new Alchemy(getAlchemySettings(chainId))
}

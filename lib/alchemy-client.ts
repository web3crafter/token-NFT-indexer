import { Alchemy, Network } from "alchemy-sdk"

const options = {
  apiKey: process.env.NEXT_PUBLIC_ETH_API_KEY,
  network: Network.ETH_MAINNET,
}

export const alchemyClient = () => {
  return new Alchemy(options)
}

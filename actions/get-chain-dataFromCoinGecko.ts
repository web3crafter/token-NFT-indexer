import { coingeckoSchema } from "@/schemas/coingeckoSchema"
import axios from "axios"

export const getChainDataFromCoinGecko = async (chainId: number) => {
  const chainName = chainId === 1 ? "ethereum" : "arbitrum"
  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${chainName?.toLowerCase()}?localization=false&tickers=false&community_data=true&developer_data=false`
    )

    const verifiedData = coingeckoSchema.parse(data)
    return verifiedData
  } catch (error) {
    console.log("error:", error)
    throw new Error("Failed to get chain data")
  }
}

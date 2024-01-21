import { alchemyClient } from "@/lib/alchemy-client"

export const getNfts = async (address: string, chainId: number) => {
  const alchemy = alchemyClient(chainId)

  try {
    const response = await alchemy.nft.getNftsForOwner(address)

    return response
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`)
    }
  }
}

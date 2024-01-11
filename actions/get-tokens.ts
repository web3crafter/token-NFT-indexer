import { alchemyClient } from "@/lib/alchemy-client"

export const getTokens = async (address: string) => {
  const alchemy = alchemyClient()

  try {
    const tokensForOwner = await alchemy.core.getTokensForOwner(address)

    const weirdNames = /^[!@$()]/
    const filteredTokens = tokensForOwner.tokens.filter((token) => {
      return (
        !weirdNames.test(token.name!) &&
        !weirdNames.test(token.symbol!) &&
        Number(token.balance) !== 0
      )
    })

    const tokens = filteredTokens.map((token) => {
      return {
        name: token.name,
        contractAddress: token.contractAddress,
        symbol: token.symbol,
        balance: token.balance,
        logo: token.logo,
      }
    })

    return { pageKey: tokensForOwner.pageKey, tokens }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`)
    }
  }
}

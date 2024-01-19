import { ARB_CHAIN, ETH_CHAIN } from "@/constants/chains"

export const getChainInfo = (chainId: number) => {
  if (chainId === 1) {
    return ETH_CHAIN
  } else return ARB_CHAIN
}

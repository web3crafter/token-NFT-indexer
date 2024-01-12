import { getChainData } from "@/actions/get-chain-data"
import { ChainDataParams } from "@/app/_components/chain-info"
import { useQuery } from "@tanstack/react-query"

export const useGetChainData = ({
  chainId,
  isEnabled,
}: {
  chainId: number
  isEnabled: boolean
}) => {
  const chainName = chainId === 1 ? "ethereum" : "arbitrum"
  return useQuery({
    queryKey: ["ChainData", chainName],
    queryFn: () => getChainData(chainName),
    enabled: isEnabled,
  })
}

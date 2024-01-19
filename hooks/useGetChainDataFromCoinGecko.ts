import { getChainDataFromCoinGecko } from "@/actions/get-chain-dataFromCoinGecko"
import { useQuery } from "@tanstack/react-query"

export const useGetChainDataFromCoinGecko = ({
  chainId,
  isEnabled,
}: {
  chainId: number
  isEnabled: boolean
}) => {
  return useQuery({
    queryKey: ["ChainData", chainId],
    queryFn: () => getChainDataFromCoinGecko(chainId),
    enabled: isEnabled,
  })
}

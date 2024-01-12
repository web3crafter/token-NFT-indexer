import { getChainData } from "@/actions/get-chain-data"
import { ChainDataParams } from "@/app/_components/chain-info"
import { useQuery } from "@tanstack/react-query"

export const useGetChainData = ({ chainName, isEnabled }: ChainDataParams) => {
  return useQuery({
    queryKey: ["ChainData"],
    queryFn: () => getChainData(chainName),
    enabled: isEnabled,
  })
}

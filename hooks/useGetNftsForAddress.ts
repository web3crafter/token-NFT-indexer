import { getNfts } from "@/actions/get-nfts"
import { useQuery } from "@tanstack/react-query"

export type GetNftsOptions = {
  address: string
  chainId: number
  isEnabled: boolean
}

export const useGetNftsForAddress = ({
  address,
  chainId,
  isEnabled,
}: GetNftsOptions) => {
  return useQuery({
    queryKey: ["nfts", address],
    queryFn: () => getNfts(address, chainId),
    enabled: isEnabled,
  })
}

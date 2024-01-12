import { useQuery } from "@tanstack/react-query"

import { getTokens } from "@/actions/get-tokens"
import { GetTokensOptions } from "@/types/tokens"
import { useEffect } from "react"

export const useGetTokensForOwner = ({
  address,
  chainId,
  isEnabled,
}: GetTokensOptions) => {
  return useQuery({
    queryKey: ["TokensForOwner", address],
    queryFn: () => getTokens(address, chainId),
    enabled: isEnabled,
  })
}

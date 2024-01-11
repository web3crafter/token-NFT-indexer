import { useQuery } from "@tanstack/react-query"

import { getTokens } from "@/actions/get-tokens"
import { GetTokensOptions } from "@/types/tokens"

export const useGetTokensForOwner = ({
  address,
  isEnabled,
}: GetTokensOptions) => {
  return useQuery({
    queryKey: ["TokensForOwner"],
    queryFn: () => getTokens(address),
    enabled: isEnabled,
  })
}

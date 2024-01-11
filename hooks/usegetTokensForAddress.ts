import { useQuery } from "@tanstack/react-query"

import { getTokens } from "@/actions/get-tokens"
import { GetTokensOptions } from "@/types/tokens"

export const useGetTokensForAddress = ({
  address,
  isEnabled,
}: GetTokensOptions) => {
  return useQuery({
    queryKey: ["TokensForAddress", address],
    queryFn: () => getTokens(address),
    enabled: isEnabled,
  })
}

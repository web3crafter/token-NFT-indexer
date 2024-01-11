import { useQuery } from "@tanstack/react-query"

import { getTokens } from "@/actions/get-tokens"
import { GetTokensOptions } from "@/types/tokens"

export const useGetTokensForAddress = ({
  ownerAddress,
  isEnabled,
}: GetTokensOptions) => {
  return useQuery({
    queryKey: ["TokensForAddress"],
    queryFn: () => getTokens(ownerAddress),
    enabled: isEnabled,
  })
}

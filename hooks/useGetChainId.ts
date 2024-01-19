import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo } from "react"
import { useNetwork } from "wagmi"

export const useGetChainId = () => {
  const { chain } = useNetwork()
  const searchParams = useSearchParams()
  const chainId = chain?.id ? chain.id : Number(searchParams.get("chainId"))

  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  )
  const pathName = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (chainId === 0) {
      params.set("chainId", "1")
      router.replace(`${pathName}?${params.toString()}`)
    }

    if (chain?.id) params.set("chainId", chainId.toString())
    router.replace(`${pathName}?${params.toString()}`)
  }, [chainId, chain?.id, params, pathName, router])

  return { chainId, searchParams, pathName, params }
}

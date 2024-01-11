"use client"

import { Dispatch, SetStateAction } from "react"

import { GetTokensOptions } from "@/types/tokens"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { isAddress } from "viem"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface SearchTokensProps {
  getTokensOptions: GetTokensOptions
  setGetTokensOptions: Dispatch<SetStateAction<GetTokensOptions>>
  refetchTokens: () => void
  refetchEthBalance: () => void
}

const SearchTokens = ({
  getTokensOptions,
  setGetTokensOptions,
  refetchTokens,
  refetchEthBalance,
}: SearchTokensProps) => {
  const router = useRouter()

  const search = () => {
    if (!isAddress(getTokensOptions.address)) {
      toast.error("Invalid address")
    } else {
      setGetTokensOptions({ ...getTokensOptions, isEnabled: true })
      refetchTokens()
      refetchEthBalance()
      router.push(`/address/${getTokensOptions.address}`)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="0x...."
        onChange={(e) =>
          setGetTokensOptions({
            ...getTokensOptions,
            address: e.target.value,
          })
        }
        className="w-96"
      />
      <Button onClick={search}>Check</Button>
    </div>
  )
}
export default SearchTokens

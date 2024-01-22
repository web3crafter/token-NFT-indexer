"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { isAddress } from "viem"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchTokens = () => {
  const [address, setAddress] = useState<string>("")
  const router = useRouter()
  const searchParams = useSearchParams()

  const search = () => {
    if (!isAddress(address)) {
      toast.error("Invalid address")
    } else {
      setAddress(address)
      router.push(`/address/${address}/?chainId=${searchParams.get("chainId")}`)
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 w-full max-w-lg">
      <Input
        placeholder="0x...."
        onChange={(e) => setAddress(e.target.value)}
        className="w-full"
      />
      <Button onClick={search}>Check</Button>
    </div>
  )
}
export default SearchTokens

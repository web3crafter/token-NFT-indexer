"use client"

import { Dispatch, SetStateAction, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { isAddress } from "viem"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const SearchTokens = () => {
  const [address, setAddress] = useState<string>("")
  const router = useRouter()

  const search = () => {
    if (!isAddress(address)) {
      toast.error("Invalid address")
    } else {
      setAddress(address)
      router.push(`/address/${address}`)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="0x...."
        onChange={(e) => setAddress(e.target.value)}
        className="w-96"
      />
      <Button onClick={search}>Check</Button>
    </div>
  )
}
export default SearchTokens

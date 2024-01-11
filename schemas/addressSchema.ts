import { isAddress } from "viem"
import { z } from "zod"

export const addressSchema = z.string().refine((value) => isAddress(value), {
  message: "Invalid Ethereum address format",
})

import { TokenMarkedDataSchema } from "@/schemas/tokenMarketDataSchema"
import { z } from "zod"

export const tokenSchema = z.object({
  contractAddress: z.string(),
  rawBalance: z.string().optional(),
  balance: z.string().optional(),
  name: z.string().optional(),
  symbol: z.string().optional(),
  decimals: z.number().optional(),
  logo: z.string().optional(),
  error: z.string().optional(),
})

export type Token = z.infer<typeof tokenSchema>

export const tokensForOwnerResultSchema = z.object({
  tokens: z.array(tokenSchema),
  pageKey: z.string().optional(),
})

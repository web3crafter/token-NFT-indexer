import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Connector } from "wagmi"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatAddress = (address: string) => {
  return `${address.slice(0, 5)}...${address.slice(address.length - 5)}`
}

export const getChainId = async (conector: Connector<any, any> | undefined) => {
  if (conector !== undefined) {
    return await conector.getChainId()
  }
}

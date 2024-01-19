"use client"

import { useState } from "react"
import { toast } from "sonner"
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export const TanstackQueryProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [queryClient, setQueryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
            if (!error.message.includes("value=undefined")) {
              toast.error(`Something went wrong: ${error.message}`)
            }
          },
        }),
      })
  )
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}

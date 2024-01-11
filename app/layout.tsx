import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "sonner"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { geistSansVariable } from "@/lib/fonts"

import { ThemeProvider } from "@/providers/theme-provider"
import WagmiRainbowProvider from "@/providers/wagmi-rainbow-provider"
import TailwindIndicator from "@/components/tailwind-indicator"

import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/nav/site-header"
import { TanstackQueryProvider } from "@/providers/tanstack-query-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: siteConfig.name,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSansVariable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TanstackQueryProvider>
            <WagmiRainbowProvider>
              <div className="relative flex flex-col min-h-screen">
                <SiteHeader />
                <div className="flex-1">{children}</div>
                <SiteFooter />
              </div>
              <Toaster richColors />
              <TailwindIndicator />
            </WagmiRainbowProvider>
          </TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

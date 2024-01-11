export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Token Indexer",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
  ],
  mobileNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
  ],
  links: {
    twitter: "https://twitter.com/web3crafter",
    github: "https://github.com/web3crafter",
    crafterScan: "https://crafterscan.vercel.app/",
  },
}

import { siteConfig } from "@/config/site"
import { Icons } from "@/constants/icons"
import { Social } from "@/types/sosial"

export const mySocials: Social[] = [
  { href: siteConfig.links.github, icon: Icons.gitHub },
  { href: siteConfig.links.twitter, icon: Icons.twitter, className: "h-4 w-4" },
]

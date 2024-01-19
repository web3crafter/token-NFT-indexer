import { siteConfig } from "@/config/site"

import ThemeToggle from "@/components/buttons/theme-toggle"
import MainNav from "@/components/nav/main-nav"
import MobileNav from "@/components/nav/mobile-nav"
import Socials from "@/components/socials"
import CustomConnectButton from "@/components/buttons/custom-connect-button"
import { Social } from "@/types/sosial"
import { Icons } from "@/constants/icons"
import ChainButton from "@/components/buttons/chain-button"
import { mySocials } from "@/config/my-socials"

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center justify-between h-16 space-x-4 sm:space-x-0">
        <MainNav items={siteConfig.mainNav} className="hidden md:flex" />
        <MobileNav items={siteConfig.mobileNav} className="md:hidden" />
        <div className="items-center justify-end flex-1 hidden space-x-4 md:flex">
          <nav className="flex items-center space-x-1">
            <div className="flex gap-2 items-center">
              <ChainButton />
              <CustomConnectButton
                chainStatus="icon"
                showBalance={false}
                variant={"secondary"}
                avatar={true}
                avatarType="identicons"
              />
            </div>
            <Socials socials={mySocials} />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
export default SiteHeader

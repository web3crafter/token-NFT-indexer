"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { NavItem } from "@/types/nav"

import Logo from "@/components/logo"
import { usePathname } from "next/navigation"

interface MainNavProps {
  items?: NavItem[]
  className?: string
}

const MainNav = ({ items, className }: MainNavProps) => {
  const pathName = usePathname()

  return (
    <div className="flex gap-6 md:gap-10">
      <Logo />
      {items?.length ? (
        <nav className={cn("flex gap-6", className)}>
          {items.map(
            (item) =>
              item.href && (
                <Link
                  href={item.href}
                  key={item.title}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80",
                    pathName === item.href && "text-foreground"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
export default MainNav

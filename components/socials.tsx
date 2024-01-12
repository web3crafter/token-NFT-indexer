import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Social } from "@/types/sosial"
import { cn } from "@/lib/utils"

interface SocialsProps {
  socials: Social[]
}

const Socials = ({ socials }: SocialsProps) => {
  return (
    <div className="flex items-center space-x-1">
      {socials.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noreferrer"
        >
          <div className={buttonVariants({ size: "icon", variant: "ghost" })}>
            <social.icon
              className={cn("w-5 h-5 fill-current", social.className)}
            />
            <span className="sr-only">{social.name}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default Socials

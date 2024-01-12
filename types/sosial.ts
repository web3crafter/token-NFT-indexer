import { IconProps } from "@/constants/icons"

export type Social = {
  name?: string
  href: string
  icon: (props: IconProps) => JSX.Element | React.ReactNode
  className?: string
}

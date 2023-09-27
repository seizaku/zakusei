import { cn } from "@/lib/utils"

const TypographyH2 = ({children, className, ...props}) => {
  return (
    <h2 className={cn(`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0`, className)} {...props}>
        {children}
    </h2>
  )
}

export default TypographyH2
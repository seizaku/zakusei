import { cn } from "@/lib/utils"

export default function TypographyH1({children, className, ...props}) {
    return (
      <h1 className={cn(`scroll-m-20 text-4xl font-extrabold tracking-tight`, className)} {...props}>
        {children}
      </h1>
    )
  }
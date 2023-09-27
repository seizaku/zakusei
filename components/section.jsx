import { cn } from "@/lib/utils"

const Section = ({children, className}) => {
  return (
    <section className={cn(`py-24`, className)}>
        {children}
    </section>
  )
}

export default Section
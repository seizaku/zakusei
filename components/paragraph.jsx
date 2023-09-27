import { cn } from "@/lib/utils"

const Paragraph = ({children, className, ...props}) => {
  return (
    <p className={cn(`pt-2 text-gray-400`, className)}>
        {children}
    </p>
  )
}

export default Paragraph
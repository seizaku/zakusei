import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Search = ({className, ...props}) => {
  return (
    <Input className={cn("w-80", className)} {...props} type="text" placeholder="Search.." />
  )
}

export default Search

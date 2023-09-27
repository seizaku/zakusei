'use client'

import Link from "next/link"
import { cn } from "@/lib/utils"

const MainNav = ({className, ...props}) => {
  return (
    <nav className={cn(`flex justify-between items-center space-x-6`, className)}{...props}>
        <Link className="text-sm font-medium transition-colors hover:text-primary" href={'/'}>Home</Link>
        <Link className="text-sm text-gray-500 font-medium transition-colors hover:text-black dark:hover:text-white" href={'/'}>About</Link>
        <Link className="text-sm text-gray-500 font-medium transition-colors hover:text-black dark:hover:text-white" href={'/'}>Projects</Link>
        <Link className="text-sm text-gray-500 font-medium transition-colors hover:text-black dark:hover:text-white" href={'/'}>Contact</Link>
    </nav>    
  )
}

export default MainNav
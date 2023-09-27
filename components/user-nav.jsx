'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Separator } from "./ui/separator"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const UserNav = () => {
  const { setTheme } = useTheme()
  const [darkMode, toggleDarkMode] = useState(true);
  useEffect(() => {
    const setDarkMode = () => {
      let mode = darkMode ? "dark" : "light";
      setTheme(mode);
    }
    setDarkMode();
  }, [darkMode]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png"/>
          <AvatarFallback>ZK</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div>
            Landrei Zerna
            <div className="text-gray-500">
              zernalandrei@gmail.com
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>My Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleDarkMode(!darkMode)}>
          {darkMode ? ("Dark Mode"):("Light Mode")}
        </DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <Separator/>
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default UserNav
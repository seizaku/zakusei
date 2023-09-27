import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { HamburgerMenuIcon, HomeIcon, PersonIcon, CodeIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"

import Link from "next/link"
import { Button } from "./ui/button"
import BrandImage from "./brand-image"
import TypographyH1 from "./typography-h1"

const HamburgerNav = () => {
  return (
    <Sheet>
    <SheetTrigger key={'left'}>
      <HamburgerMenuIcon className="h-6 w-6"/>
    </SheetTrigger>
    <SheetContent side={'left'} className="w-[300px] ">
      <SheetHeader>
        <div className="grid grid-cols-1 justify-items-center justify-self-center mt-4">
          <BrandImage height="76" width="76"/>
          <TypographyH1 className={'text-xl mt-4 font-'}>
            {`<Zakusei/>`}
          </TypographyH1>
        </div>
      </SheetHeader>
      <div className="grid grid-cols-1 space-y-2 mt-12 ">
        <button className="flex text-sm font-medium items-center transition-colors hover:text-white py-4 px-4 rounded-lg text-left" variant="outline">
          <HomeIcon className="mr-3"/>
          Home
        </button>
        <button className="flex text-sm font-medium items-center transition-colors text-gray-500 hover:text-white py-4 px-4 rounded-lg text-left" variant="outline">
          <PersonIcon className="mr-3"/>
          About
        </button>
        <button className="flex text-sm font-medium items-center transition-colors text-gray-500 hover:text-white py-4 px-4 rounded-lg text-left" variant="outline">
          <CodeIcon className="mr-3"/>
          Projects
        </button>
        <button className="flex text-sm font-medium items-center transition-colors text-gray-500 hover:text-white py-4 px-4 rounded-lg text-left" variant="outline">
          <EnvelopeClosedIcon className="mr-3"/>
          Contact
        </button>
      </div>
    </SheetContent>
    </Sheet>
  )
}

export default HamburgerNav
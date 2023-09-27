"use client";

import MainNav from "@/components/main-nav";
import { Separator } from "@/components/ui/separator";
import Search from "@/components/search-input";
import UserNav from "@/components/user-nav";
import HamburgerNav from "@/components/mobile-nav";
import BrandImage from "@/components/brand-image";
import { ModeToggle } from "./mode-toggle";
import SocialMedia from "@/components/social-media";

const NavigationBar = () => {
  return (
    <div className="dark:border-none border-b">
      <div className="hidden sm:hidden md:flex justify-around h-16 items-center px-4 mx-60">
        <BrandImage />
        <Separator className="m-4 h-6" orientation="vertical" />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <SocialMedia />
          <ModeToggle />
        </div>
      </div>
      <div className="flex justify-between md:hidden h-16 px-4 mx-6 items-center">
        <HamburgerNav />
        <BrandImage />
        <ModeToggle />
        {/* <UserNav/> */}
      </div>
    </div>
  );
};

export default NavigationBar;

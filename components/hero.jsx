"use client";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import TypographyH1 from "./typography-h1";
import Paragraph from "./paragraph";
import Section from "./section";
import Link from "next/link";
import Typewriter from "typewriter-effect";

import { CodeIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

const Hero = ({ className }) => {
  return (
    <Section className={className}>
      {/* <Link className={buttonVariants({ variant: "outline" })} href={'https://github.com/zakusei'}>
          <span className="px-2"><GitHubLogoIcon /></span>
          Github Repository
        </Link> */}

      <TypographyH1 className={"lg:text-7xl font-large py-4"}>
        <Typewriter
          options={{
            strings: ["< Zakusei.dev />"],
            autoStart: true,
            loop: true,
          }}
        />
      </TypographyH1>

      <Paragraph
        className={
          "dark:text-gray-400 light:text-gray-500 text-sm md:text-md lg:text-lg"
        }
      >
        A skilled Fullstack Web Developer.
      </Paragraph>
      <div className="container mx-auto grid grid-cols-1 sm:flex sm:justify-center sm:space-x-6 gap-2 pt-6">
        <Link
          href={"https://github.com/zakusei"}
          className={cn(buttonVariants(), "px-8")}
        >
          <CodeIcon className="mr-3" />
          My Projects
        </Link>
        <Link
          href={"https://mail.google.com/mail/u/zakusei.dev@gmail.com/#compose"}
          className={cn(buttonVariants({ variant: "outline" }), "px-8")}
        >
          <EnvelopeClosedIcon className="mr-3" />
          Contact Me
        </Link>
      </div>
    </Section>
  );
};

export default Hero;

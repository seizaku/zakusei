import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import Paragraph from "./paragraph"
import TypographyH1 from "./typography-h1"
import TypographyH2 from "./typography-h2"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from 'next/image'

const AboutMe = ({className}) => {
  return (
    <section className={cn(`mx-auto p-8 py-6 text-center mt-40`, className)}>
      <TypographyH1>About Me</TypographyH1>
      <div className="flex justify-around">
        <div className="text-start">
          <p></p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
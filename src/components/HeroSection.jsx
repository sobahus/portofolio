"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { ShootingStars } from "@/components/ui/shooting-start";

const HeroSection = () => {
  return (
    <section
      className="min-h-[calc(110dvh-100px)] flex justify-center items-center"
      aria-label="hero"
    >
      <aside>
        <header className="space-y-4 w-full max-w-3xl justify-center items-center text-center">
          <h1 className="font-chillax-semibold text-3xl md:text-4xl lg:text-5xl">
            Hello, I'am
            <ContainerTextFlip
              className="bg-black text-white dark:bg-accent px-0 py-2 ml-2 rounded-none"
              words={["Ni'am", "Network Engineer","Cyber Security", "Web Developer"]}
            />
          </h1>
          <p className="font-chillax-regular text-lg md:text-lg lg:text-xl leading-relaxed">
            I am a Network Engineer, I am also interested in Web Development
            with responsive and modern design, and interested in Cyber Security.
          </p>
        </header>
        <ShootingStars starWidth="10" starHeight="2" className="-z-4" />

        <footer className="flex justify-center gap-2 mt-4 py-4">
          <Button>
            <Link
              href="/Resume/[ID] CV Resume M.Sobahus Sururin Niam.pdf"
              target="_blank"
              className="focus:outline-none"
            >
              Download CV
            </Link>
          </Button>
          <Button variant="outline">
            <Link
              href="/about"
              className="flex items-center gap-[4px] focus:outline-none"
            >
              About Me
              <ArrowRight />
            </Link>
          </Button>
        </footer>
      </aside>
    </section>
  );
};

export default HeroSection;

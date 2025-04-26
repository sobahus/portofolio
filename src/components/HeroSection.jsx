"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram } from "lucide-react";
import GitHub from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import Link from "next/link";

const HeroSection = () => {
  const iconList = [
    {
      name: "Github",
      icon: <GitHub className="h-5 w-5" />,
      link: "https://github.com/sobahus",
    },
    {
      name: "Linkedin",
      icon: <LinkedIn className="h-5 w-5" />,
      link: "https://linkedin.com/in/sobahusn-niam/",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      link: "https://instagram.com/sobahusn27",
    },
  ];

  return (
    <section
      className="min-h-[calc(105dvh-100px)] flex justify-center items-center"
      aria-label="hero"
    >
      <aside>
        <header className="space-y-4 w-full max-w-xl text-center" aria-label="">
          <h1 className="font-chillax-semibold text-xl md:text-2xl lg:text-6xl">
            Hello, I'am{" "}
            <span className="bg-primary dark:bg-white text-white dark:text-black rounded-md px-2">
              Ni'am
            </span>
          </h1>
          <p className="font-chillax-regular text-md md:text-lg lg:text-xl">
            I am a Front-End Developer, I am interested in web development with
            responsive and modern design.
          </p>
        </header>

        <footer className="flex justify-center gap-2 mt-4 py-4">
          <Button>
            <Link href="/" className="focus:outline-none">
              Download CV
            </Link>
          </Button>
          <Button variant="outline">
            <Link href="/about" className="flex items-center gap-[4px] focus:outline-none">
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

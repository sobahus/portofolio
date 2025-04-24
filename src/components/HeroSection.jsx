"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram } from "lucide-react";
import GitHub from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import Link from "next/link";
import Skills from "./skills";

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
      className="min-h-[calc(105dvh-100px)] p-4 flex justify-center items-center"
      aria-label="hero"
    >
      <div className="w-full max-w-2xl flex flex-col gap-4 justify-center items-center">
        <header className="space-y-4">
          <h1 className="text-center font-bold text-xl md:text-2xl lg:text-2xl">
            Hello, I'am Ni'am
          </h1>
          <p className="text-center text-md md:text-lg lg:text-xl">
            I am a Front-End Developer, I am interested in web development with
            responsive and modern design.
          </p>
        </header>

        <article>
          <Skills />
        </article>

        <div className="flex gap-2 mt-4 py-4">
          <Link href="/">
            <Button>Download CV</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" >
              About Me
              <ArrowRight />
            </Button>
          </Link>
        </div>

        <div aria-label="link-icons" className="flex justify-center gap-1">
          {iconList.map((icon, index) => (
            <a
              className="p-2 border rounded-full hover:bg-white/5 transition-all duration-300"
              key={index}
              href={icon.link}
              aria-label={icon.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

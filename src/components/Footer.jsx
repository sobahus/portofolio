"use client";

import Link from "next/link";
import { Rss } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const menuFooter = [
    { id: "1", name: "Home", link: "/" },
    { id: "2", name: "About", link: "/about" },
    { id: "3", name: "Project", link: "/project" },
    { id: "4", name: "Certificated", link: "/certificated" },
  ];

  return (
    <>
      <section
        id="footer"
        aria-label="footer"
        className="min-h-[calc(60dvh-100px)] outline-1 border-accent-foreground p-4
        flex justify-evenly py-6 
        "
      >
        <header className="flex flex-col gap-2">
          <Link href="/" className="flex">
            <h1 className="text-xl font-semibold">Sobahusn</h1>
          </Link>
          <p className="text-sm">My Personal Blog</p>
          <Link href="https://hashnode.niam.my.id/" target="_blank">
            <Button className="w-full rounded-none">
              <figure>
                <Rss className="w-4 h-4" />
              </figure>
              <p>Personal Blog</p>
            </Button>
          </Link>
        </header>

        <aside>
          <ul className="flex flex-col gap-4">
            {menuFooter.map((menu) => (
              <li key={menu.id}>
                <Link href={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
};

export default Footer;

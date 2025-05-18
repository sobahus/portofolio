"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { House, Award, User, FolderTree, Menu, X, Link } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import ThemeModeToggle from "./ToggleMode";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animating, setIsAnimating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleTabChange = (value) => {
    router.push(value);
    if (!mobileMenuOpen) {
      setMobileMenuOpen(true);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setIsAnimating(false);
      }, 400);
    }
  };

  const menuNavbar = [
    { icon: <House width={18} />, name: "Home", link: "/" },
    { icon: <FolderTree width={18} />, name: "Projects", link: "/projects" },
    { icon: <Award width={18} />, name: "Certificate", link: "/certificate" },
    { icon: <User width={18} />, name: "About", link: "/about" },
  ];

  return (
    <>
      <nav className="flex sm:justify-center sm:sticky z-50 top-0" role="menu">
        {/* Desktop */}
        <section className="hidden sm:block p-4 px-4">
          <Tabs
            value={pathname}
            className="hidden sm:block mx-auto outline p-2 rounded-md 
            data-[state=active]:bg-background 
            dark:data-[state=active]:bg-background/80 backdrop-blur-sm
            "
            onValueChange={handleTabChange}
          >
            <TabsList className="flex gap-4 items-center">
              {menuNavbar.map((menu, index) => (
                <TabsTrigger
                  key={index}
                  value={menu.link}
                  className="cursor-pointer hover:scale-105 transition-transform"
                  title={menu.name}
                >
                  <figure>{menu.icon}</figure>
                  <p>{menu.name}</p>
                </TabsTrigger>
              ))}
              <ThemeModeToggle />
            </TabsList>
          </Tabs>
        </section>

        {/* Mobile Menu (Overlay) */}
        <section className="block sm:hidden">
          <span className="py-4 px-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="z-50"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <figure>
              <ThemeModeToggle />
            </figure>
          </span>

          {/* Overlay Backdrop with transition */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out
              ${mobileMenuOpen ? "opacity-100 z-20" : "opacity-0 -z-10"}
            `}
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          />

          {/* Aside Mobile Menu */}
          <span
            className={`fixed top-0 z-40 w-full h-auto bg-white dark:bg-accent shadow-md  
              ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"} z-40
              `}
          >
            <ul className="flex flex-col gap-4 p-4 px-8 mt-14">
              {menuNavbar.map((menu, index) => (
                <a
                  href={menu.link}
                  key={index}
                  className="flex items-center gap-2 cursor-pointer"
                  title={menu.name}
                >
                  <figure>{menu.icon}</figure>
                  <p className="text-sm">{menu.name}</p>
                </a>
              ))}
            </ul>
          </span>
        </section>
      </nav>
    </>
  );
};

export default Navbar;

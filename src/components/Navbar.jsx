"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { House, Award, User, FolderTree, Menu, X, Info } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import ThemeModeToggle from "./ToggleMode";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabChange = (value) => {
    router.push(value);
  };

  const menuNavbar = [
    { icon: <House />, name: "Home", link: "/" },
    { icon: <FolderTree />, name: "Projects", link: "/projects" },
    { icon: <Award />, name: "Certificate", link: "/certificate" },
    { icon: <User />, name: "About", link: "/about" },
  ];

  return (
    <>
      <nav className="flex sm:justify-center sm:sticky z-50 top-0">
        <section className="flex items-center justify-center p-4 px-4">
          {/* Desktop Menu */}
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
                  aria-label={menu.name}
                  tittle={menu.name}
                >
                    <figure>{menu.icon}</figure>
                    <p>{menu.name}</p>
                </TabsTrigger>
              ))}
              <ThemeModeToggle />
            </TabsList>
          </Tabs>
        </section>

        {/* Mobile Menu Button */}
        <section className="flex ">
          <nav className="sm:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ThemeModeToggle />
          </nav>
        </section>
      </nav>
    </>
  );
};

export default Navbar;

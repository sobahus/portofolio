"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { House, Award, User, FolderTree, Menu, X, Info } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import ThemeModeToggle from "./ToggleMode";
import Profile from "./common/profile";
import Link from "next/link";

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
      <nav
        className="sticky top-0 z-50 data-[state=active]:bg-background 
      dark:data-[state=active]:bg-background/80 backdrop-blur-sm transition-all 
      duration-300 outline
      "
      >
        <section className="flex items-center justify-between p-4 px-4">
          <Link href="/">
            <h2 className="font-bold text-md flex items-center gap-2">
              <Profile />
              Sobahusn
            </h2>
          </Link>

          {/* Desktop Menu */}
          <Tabs
            value={pathname}
            className="hidden sm:block"
            onValueChange={handleTabChange}
          >
            <TabsList className="flex gap-4">
              {menuNavbar.map((menu, index) => (
                <TabsTrigger
                  key={index}
                  value={menu.link}
                  className="cursor-pointer"
                  aria-label={menu.name}
                  tittle={menu.name}
                >
                  {menu.icon}
                  {menu.name}
                </TabsTrigger>
              ))}
              <ThemeModeToggle />
            </TabsList>
          </Tabs>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center gap-2">
            <ThemeModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { House, Award, User } from "lucide-react";
import ThemeModeToggle from "../ToggleMode";


const Navbar = () => {
  const menuNavbar = [
    {
      icon: <House />,
      name: "Home",
      link: "/",
    },
    {
      icon: <Award />,
      name: "Certificate",
      link: "/certificate",
    },
    {
      icon: <User />,
      name: "About",
      link: "/about",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 data-[state=active]:bg-background dark:data-[state=active]:bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="flex items-center justify-between p-4 px-8">
        <h2 className="font-bold text-md tracking-wide">Sobahusn</h2>
        <Tabs defaultValue="/" className="hidden sm:block">
          <TabsList className="flex gap-4">
            {menuNavbar.map((menu, index) => (
              <TabsTrigger key={index} value={menu.link} className="cursor-pointer">
                {menu.icon}
                {menu.name}
              </TabsTrigger>
            ))}
          <ThemeModeToggle/>
          </TabsList>
        </Tabs>
      </div>
    </nav>
  );
};

export default Navbar;

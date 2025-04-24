"use client"

import { Button } from "./ui/button";

const Skills = () => {
  const skillsMenu = [
    {
      name: "Cyber Security",
      icon: "",
      description: "",
    },
    {
      name: "Network Engineer",
      icon: "",
      description: "",
    },
    {
      name: "Web Developer",
      icon: "",
      description: "",
    },
  ];

  return (
  <section aria-label="Skills" className="mt-2">
    <div className="flex gap-2">
        {skillsMenu.map((skill, index) => (
          <Button key={index} variant="outline" size="sm">
            <span className="text-xs drop-shadow-sm dark:hover:drop-shadow-white hover:drop-shadow-black">{skill.name}</span>
          </Button>
        ))}
    </div>
  </section>
);
};

export default Skills;

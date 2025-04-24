"use client";

import experience from "@/data/experience";
import { WrenchIcon } from "lucide-react";

const Experience = () => {
  return (
    <section
      aria-label="experience"
      className="min-h-screen flex flex-col py-24"
    >
      <header className="flex flex-col justify-center">
        <h2 className="text-lg md:text-xl lg:text-2xl text-center font-semibold underline underline-offset-4 ">
          My Experience
        </h2>
        <p className="text-sm md:text-md lg:text-lg text-center">
          Profesional Journey and Work Experience
        </p>
      </header>

      <article className="grid grid-cols-2 justify-center gap-4 mx-auto py-4">
        {experience.map((exp) => (
          <aside
            key={exp.id}
            className="flex flex-col gap-2 p-4 px-6 md:grid border rounded-lg
          dark:hover:drop-shadow-white drop-shadow-2xl transition-all
          hover:drop-shadow-black cursor-default shadow-md/10 shadow-gray-500
          "
          >
            <h3 className="text-xs md:text-sm lg:text-md font-semibold flex items-center gap-2">
              <WrenchIcon className="w-4 h-4" />
              {exp.tittle}
            </h3>
            <time className="text-xs">{exp.date}</time>
            <p>{exp.description}</p>
          </aside>
        ))}
      </article>
    </section>
  );
};

export default Experience;

"use client";

import { techStack } from "@/data/tech-stack";

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      aria-label="tech-stack"
      className="min-h-screen bg-gray-50 dark:bg-black/80 py-12"
    >
      <header className="flex flex-col items-center justify-center p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold underline underline-offset-6 ">
          My Tech Stack
        </h2>
        <p>The technology I usually use</p>
      </header>

      <article className="flex justify-center items-center py-12">
        <span className="flex gap-4">
          {techStack.map((tech) => (
            <a
              key={tech.id}
              href={tech.link}
              className="p-4  
                flex flex-col items-center"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
            </a>
          ))}
        </span>
      </article>
    </section>
  );
};

export default TechStack;

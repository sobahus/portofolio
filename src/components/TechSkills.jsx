"use client";

import { techStack } from "@/data/tech";

const TechStack = () => {

  return (
    <section
      id="tech-stack"
      aria-label="tech-stack"
      className="min-h-[calc(70vh-100px)] bg-gray-50 dark:bg-black/80 py-12"
    >
      <header className="flex flex-col items-center justify-center p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Technology and Skills
        </h2>
      </header>

      <article className="flex flex-col justify-center items-center gap-4 p-6 px-12 md:flex-row">
        {techStack.map((tech) => (
          <div key={tech.id} className="outline w-full h-full rounded-md p-4">
            <span className="">
              <header className="z-10 flex items-center gap-2">
                <img
                  src={tech.description.icon}
                  alt={tech.description.name}
                  className="w-12 h-12"
                />
                <figcaption>{tech.description.name}</figcaption>
              </header>
            </span>
          </div>
        ))}
      </article>
    </section>
  );
};

export default TechStack;

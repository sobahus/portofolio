"use client";

import experience from "@/data/experience";
import Link from "next/link";

const Experience = () => {
  return (
    <>
      <section aria-label="experience" className="min-h-screen">
        <aside
          id="experience"
          aria-label="experience"
          className="py-24 flex flex-col justify-center items-center"
        >
          <header>
            <h2 className="text-lg md:text-xl lg:text-2xl text-center font-semibold underline underline-offset-6">
              My Experience
            </h2>
            <p className="text-sm md:text-md lg:text-lg text-center">
              Profesional Journey and Work Experience
            </p>
          </header>

          <article className="w-full max-w-xl">
            <section className="flex flex-col gap-4">
              {experience.map((exp) => (
                <Link
                  href="#experience"
                  key={exp.id}
                  className="border rounded-md p-4"
                >
                  <article>
                    <header className="flex gap-4">
                      <time className="text-sm w-full">{exp.date}</time>
                      <h2>{exp.tittle}</h2>
                      <p></p>
                    </header>

                    <div>
                      <figure></figure>
                      <h2></h2>
                      <p></p>
                    </div>
                  </article>
                </Link>
              ))}
            </section>
          </article>
        </aside>
      </section>
    </>
  );
};

export default Experience;

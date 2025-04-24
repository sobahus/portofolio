"use client";

import { Button } from "../ui/button";

const Preview = () => {
  return (
    <>
      <section className="min-h-screen">
        <header className="flex justify-center items-center">
          <h1 className="text-2xl font-semibold underline underline-offset-4">
            Projects
          </h1>
        </header>

        <section className="grid justify-center py-12">
          <article
            className="flex gap-4 overflow-hidden rounded-md border p-2 w-full max-w-xl
            hover:shadow-sm cursor-pointer hover:scale-102 transition-all duration-200
          "
          >
            <figure>
              <img
                src="/profile-2d.png"
                alt="example"
                className="w-40 h-40 rounded-md object-cover"
              />
            </figure>
            <div className="flex flex-col justify-between">
              <header>
                <h2 className="font-semibold text-xl">Example</h2>
              </header>
              <label></label>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
                commodi?
              </p>
              <footer className="mt-4 flex justify-end">
                <Button variant="outline" size="xs" className="text-xs">
                  Sobahusn
                </Button>
              </footer>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Preview;

"Use Client";

import Image from "next/image";

const AboutMe = () => {
  return (
    <section aria-label="about-me" className="min-h-screen">
      <header className="flex justify-center">
        <h1 className="text-2xl font-semibold">About Me</h1>
      </header>

      <article
        aria-label="about-me"
        className="items-center flex justify-start px-24 p-4"
      >
        <figure>
          <Image
            src="/profile-2d.svg"
            alt="profile"
            width="400"
            height="400"
            className="object-contain rounded-md"
          />
        </figure>
        <aside>
          <header>
            <h2></h2>
          </header>
          <p></p>
        </aside>
      </article>
    </section>
  );
};

export default AboutMe;

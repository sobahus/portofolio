"use client";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";

const Preview = () => {
  return (
    <>
      <section className="min-h-screen">
        <header className="flex justify-center mb-12">
          <h2 className="text-lg md:text-xl lg:text-3xl font-semibold">
            Projects
          </h2>
        </header>

        <article className="flex justify-center p-4 px-6">
          <MorphingDialog
            transition={{ type: "spring", bounce: 0.05, duration: 0.25 }}
          >
            {/* Trigger OnClick Dialog */}
            <MorphingDialogTrigger className="w-full max-w-xs overflow-hidden rounded-md outline shadow-sm">
              <figure>
                <MorphingDialogImage
                  src="/profile-2d.png"
                  alt="example"
                  className="w-full h-60 object-cover"
                />
              </figure>

              {/* Preview Conten Dialog */}
              <section className="p-4">
                <header className="text-left">
                  <MorphingDialogTitle className="font-semibold text-xl">
                    Project 1
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur error provident quod eaque dolores sequi officia
                  </MorphingDialogSubtitle>
                </header>
              </section>
            </MorphingDialogTrigger>

            {/* Container Dialog */}
            <MorphingDialogContainer>
              <MorphingDialogContent className="flex justify-center max-w-3xl outline overflow-hidden rounded-md bg-accent backdrop-blur-xl z-60">
                <MorphingDialogImage
                  src="/profile-2d.png"
                  alt="example"
                  className="w-60 h-60 object-cover"
                />
                <div className="p-4">
                  <header>
                    <MorphingDialogTitle className="text-lg font-semibold">
                      Project 1
                    </MorphingDialogTitle>
                    <MorphingDialogSubtitle>Hello-Word!</MorphingDialogSubtitle>
                  </header>
                  <MorphingDialogDescription
                    disableLayoutAnimation
                    variant={{
                      initial: { opacity: 0, scale: 0.8, y: 100 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.8, y: 100 },
                    }}
                  >
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sint delectus ad ullam error praesentium corrupti
                      laboriosam consequatur natus neque minus.
                    </p>
                  </MorphingDialogDescription>
                </div>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
        </article>
      </section>
    </>
  );
};

export default Preview;

import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import AnimatedDiv from "@/app/components/AnimatedDiv";
import EchoesReview from "@/app/components/EchoesReview";

const EchoesPage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl pb-10 md:pb-12 xl:pb-16">
      <section className="container_pad pb-16 pt-[124px] md:pb-14 md:pt-[152px] lg:pb-16 xl:pb-20 xl:pt-[176px]">
        {/* book */}
        <div className="grid gap-14 md:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Image and Links */}
          <div className="relative mx-auto w-fit md:col-span-4 md:mx-0">
            {/* image */}
            <div className="top-6 mx-auto w-fit md:sticky md:col-span-4 md:mx-0">
              <AnimatedDiv variant="fadeInLeft">
                <Image
                  src="/echobook.webp"
                  alt="Echoes of Existence book image"
                  width={0}
                  height={0}
                  sizes="100vw (max-width: 896px) 45vw"
                  className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-80 xl:max-w-96"
                  priority={true}
                />
              </AnimatedDiv>

              {/* product links */}
              <AnimatedDiv variant="fadeInUp" delay={1}>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button text="APPLE BOOKS" />
                  <Button text="AUDIBLE" />
                  <Button text="AMAZON" />
                  <Button text="INDIEBOUND" />
                </div>
              </AnimatedDiv>
            </div>
          </div>

          {/* title and synopsis */}
          <div className="mt-6 overflow-hidden md:col-span-8 md:mt-4">
            <AnimatedDiv variant="fadeInRight" delay={0.4}>
              <h3 className="mb-4 max-w-[240px] text-lg font-semibold text-primary md:text-2xl lg:text-3xl">
                Latest release by Natalia Davies
              </h3>
              <div className="mb-4 w-fit border-l-4 border-primary pl-5">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                  ECHOES OF <br /> EXISTENCE
                </h1>
              </div>
            </AnimatedDiv>
            <AnimatedDiv variant="fadeInUp" delay={0.8}>
              <p className="mb-10 font-semibold md:text-lg lg:mb-8 lg:text-xl">
                A journey of loss, love and self-discovery.
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant="fadeInUp" delay={1}>
              <p className="text-base font-extralight leading-7 lg:text-xl lg:leading-8">
                Enter the mysterious world of "Echoes of Existence" by Natalia
                Davies, where a haunting forest shrouded in thick fog sets the
                stage for a journey of introspection and discovery.
                <br />
                <br />
                Protagonist Alice finds herself drawn into the depths of this
                enigmatic forest, seeking solace and answers amidst the
                lingering echoes of a tragic event from her past. As she
                navigates through the ethereal mist and tangled undergrowth,
                Alice confronts her inner demons and uncovers hidden truths
                buried within the shadows of the forest. Each step she takes
                reveals echoes of her existence – memories, emotions, and
                connections that shape her understanding of life and love.
                <br />
                <br />
                Natalia Davies' evocative prose paints a vivid portrait of
                Alice's emotional landscape, where the fog symbolizes the veil
                between reality and memory. Through the interplay of light and
                shadow, truth and illusion, Alice embarks on a transformative
                journey of self-discovery, guided by the echoes that resonate
                through the forest. "Echoes of Existence" is a haunting
                exploration of resilience, redemption, and the enduring power of
                the human spirit, set against the backdrop of a mystical forest
                where echoes of the past converge with hopes for the future
              </p>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* REVIEW Section */}
      <section className="container_pad mt-12 md:mt-20 text-center lg:mt-28">
        <AnimatedDiv variant="fadeInUp">
          <h3 className="mb-3 text-lg font-semibold text-primary lg:mb-4 lg:text-2xl">
            WHAT READERS ARE SAYING
          </h3>
          <h2 className="text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            REVIEWS
          </h2>
        </AnimatedDiv>

        {/* reviews */}
        <div className="mx-auto mt-20 lg:mt-24">
          <AnimatedDiv variant="fadeInUp" delay={0.4}>
            <EchoesReview />
          </AnimatedDiv>
        </div>
      </section>
      {/* REVIEW Section end */}

      {/* BUY SECTION */}
      <section className="container_pad mt-12 md:mt-20 text-center lg:mt-28">
        <AnimatedDiv variant="fadeInUp">
          <h2 className="text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            BUY THE BOOK
          </h2>{" "}
          {/* product links */}
          <div className="mt-20 flex flex-wrap justify-center gap-4 lg:mt-24">
            <Button text="APPLE BOOKS" />
            <Button text="AUDIBLE" />
            <Button text="AMAZON" />
            <Button text="INDIEBOUND" />
          </div>
        </AnimatedDiv>
      </section>
      {/* BUY Section end */}
    </div>
  );
};

export default EchoesPage;

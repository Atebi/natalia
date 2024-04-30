import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import AnimatedDiv from "@/app/components/AnimatedDiv";
import RedReview from "@/app/components/RedReview";

const RedSignPage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl ">
      <section className="container_pad bg-global-bg bg-cover bg-fixed bg-center pb-16 pt-[124px] md:pb-14 md:pt-[152px] lg:pb-16 xl:pb-20 xl:pt-[176px]">
        {/* book */}
        <div className="grid gap-14 md:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Image and Links */}
          <div className="relative mx-auto w-fit md:col-span-4 md:mx-0">
            {/* image */}
            <div className="top-6 mx-auto w-fit md:sticky md:col-span-4 md:mx-0">
              <AnimatedDiv variant="fadeInLeft">
                <Image
                  src="/redbook.webp"
                  alt="Red Sign book image"
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
              {/* <h3 className="mb-4 max-w-[240px] text-lg font-semibold text-primary md:text-2xl">
                LATEST RELEASE BY ARNOLD PECKHAM
              </h3> */}
              <div className="mb-4 w-fit border-l-4 border-primary pl-5">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                  RED SIGN
                </h1>
              </div>
            </AnimatedDiv>
            <AnimatedDiv variant="fadeInUp" delay={0.8}>
              <p className="mb-10 semibold font-medium md:text-lg lg:mb-8 lg:text-xl">
                Unravelling Secrets in a Small Town.
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant="fadeInUp" delay={1}>
              <p className="text-base font-extralight leading-7 lg:text-xl lg:leading-8">
                In the quaint town of Lucretia, the arrival of a mysterious red
                sign casts a chilling shadow over the lives of its inhabitants
                in Natalia Davies' "Red Sign."
                <br />
                <br />
                The sign's appearance triggers a series of unsettling events,
                causing tensions to rise and buried secrets to resurface. Meet
                Anna Walker, a curious and determined resident who becomes
                entangled in the web of mystery surrounding the ominous red
                sign. As Natalia Davies' narrative unfolds, readers witness the
                profound impact of the red sign on the town's residents,
                revealing hidden desires, fears, and motivations. The town
                becomes a stage for suspense and intrigue, where every clue
                leads to unexpected revelations and every encounter unveils a
                new layer of complexity.
                <br />
                <br />
                "Red Sign" is a gripping mystery that explores the ripple
                effects of secrets and deception in a community gripped by
                uncertainty and fear.
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
            <RedReview />
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

export default RedSignPage;

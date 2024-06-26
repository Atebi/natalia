import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";
import AnimatedDiv from "@/app/components/AnimatedDiv";
import ShelbyReview from "@/app/components/ShelbyReview";

const ShelbyPage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl pb-10 md:pb-14 lg:pb-16 xl:pb-20">
      <section className="container_pad bg-ff-bg bg-cover bg-fixed bg-center pb-16 pt-[124px] md:pb-14 md:pt-[152px] lg:pb-16 xl:pb-20 xl:pt-[176px]">
        {/* book */}
        <div className="grid gap-14 md:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Image and Links */}
          <div className="relative mx-auto w-fit md:col-span-4 md:mx-0">
            {/* image */}
            <div className="top-6 mx-auto w-fit md:sticky md:col-span-4 md:mx-0">
              <AnimatedDiv variant="fadeInLeft">
                <Image
                  src="/shelbybook.webp"
                  alt="Shelby book image"
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
              <div className="mb-4 w-fit border-l-4 border-primary pl-5">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                  SHELBY
                </h1>
              </div>
            </AnimatedDiv>

            <AnimatedDiv variant="fadeInUp" delay={0.7}>
              <p className="mb-10 font-semibold md:text-lg lg:mb-8 lg:text-xl">
                Identity, Redemption and the Shadows Within.
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant="fadeInUp" delay={1}>
              {" "}
              <p className="text-base font-extralight leading-7 lg:text-xl lg:leading-8">
                Step into the world of Shelby, the resilient protagonist of
                Natalia Davies' "Shelby."
                <br />
                <br />
                Shelby is a woman haunted by profound loss and the weight of
                unresolved emotions stemming from a tragic event in her past. As
                she navigates through life's complexities, Shelby embarks on a
                deeply introspective journey of self-discovery and healing.
                <br />
                <br />
                Through Natalia Davies' evocative prose, readers witness
                Shelby’s transformation as she confronts her inner demons,
                unravels hidden truths, and learns to embrace the shadows of her
                history. Along the way, Shelby encounters unexpected connections
                and experiences moments of profound clarity that illuminate the
                human experience in profound ways.
                <br />
                <br />
                "Shelby" is a poignant exploration of resilience, redemption,
                and the enduring power of love, portrayed through the
                captivating journey of a complex and compelling protagonist.
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
            {" "}
            <ShelbyReview />
          </AnimatedDiv>
        </div>
      </section>
      {/* REVIEW Section end */}

      {/* BUY SECTION */}
      <section className="container_pad mt-12 md:mt-20 text-center lg:mt-28">
        <AnimatedDiv variant="fadeInUp">
          {" "}
          <h2 className="text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            BUY THE BOOK
          </h2>
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

      {/* OTHER BOOKS SECTION */}
      <section className="container_pad mt-28 md:mt-36 text-center lg:mt-36 xl:mt-44">
        <AnimatedDiv variant="fadeInUp">
          {" "}
          <h2 className="text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            OTHER BOOKS
          </h2>
          {/* books */}
          <div className="mx-auto mt-24 flex max-w-screen-md flex-col items-center justify-center gap-16 md:flex-row md:gap-10 lg:mt-28">
            {/* book-1 */}
            <AnimatedDiv variant="fadeInUp" delay={0.4}>
              <div className="max-w-[224px] relative w-full md:max-w-xs">
                <Image
                  src="/echo.webp"
                  alt="book image of Echoes of Existence"
                  width={0}
                  height={0}
                  sizes="100vw (max-width: 896px) 33vw"
                  className="mx-auto h-auto mb-6 w-full"
                />
                {/* <h4 className="mb-3 mt-8 text-2xl font-medium lg:mt-12">
                Global Sourcing
              </h4>
              <p className="mb-5 text-base font-light lg:h-56 lg:text-lg">
                "An insightful guide that demystifies the outsourcing landscape.
                This book not only highlights the benefits but also addresses
                the potential challenges and how to mitigate them. A valuable
                resource for entrepreneurs and managers alike."
              </p> */}
                <Link href="/books/echoes-of-existence">
                  <Button />
                </Link>
                {/* new badge */}
                <div className="bg-[url('/badge.webp')] px-2 shadow-2xl md:px-4 py-[2px] text-gray bg-cover font-bold absolute right-0 top-0 z-20 text-xs leading-none">
                  Latest
                </div>
              </div>
            </AnimatedDiv>
            {/* book-2 */}
            <AnimatedDiv variant="fadeInUp" delay={0.4}>
              <div className="max-w-[224px] w-full md:max-w-xs">
                <Image
                  src="/redsign.webp"
                  alt="book image of Red Sign"
                  width={0}
                  height={0}
                  sizes="100vw (max-width: 896px) 33vw"
                  className="mb-6 mx-auto h-auto w-full"
                />
                {/* <h4 className="mb-3 mt-8 text-2xl font-medium lg:mt-12">
                Future Financiers
              </h4>
              <p className="mb-5 text-base font-light lg:h-56 lg:text-lg">
                "This book is a treasure trove of insights for finance
                professionals. It presents innovative approaches to wealth
                management with clarity and depth, making complex topics
                accessible to all readers. Highly recommended for anyone looking
                to future-proof their financial strategies."
              </p> */}
                <Link href="/books/red-sign">
                  <Button />
                </Link>
              </div>
            </AnimatedDiv>
          </div>
        </AnimatedDiv>
      </section>
      {/* OTHERS Section end */}
    </div>
  );
};

export default ShelbyPage;

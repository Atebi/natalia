import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import AnimatedDiv from "../components/AnimatedDiv";

const BooksPage = () => {
  return (
    <section className="container_pad mt-[72px] pt-14 text-center xl:pt-16">
      <AnimatedDiv variant="fadeInUp">
        <div className="w-fit mb-10 lg:mb-16 mx-auto p-4 rounded-tl-3xl rounded-br-3xl bg-gray/50">
          <h1 className="text-center rounded-bl-3xl rounded-tr-3xl text-3xl font-bold md:text-4xl xl:text-5xl">
            NATALIA's BOOKS
          </h1>
        </div>
      </AnimatedDiv>

      {/* books */}
      <div className="mx-auto mt-16 flex max-w-screen-md flex-col items-center justify-center gap-16 md:flex-row md:gap-10 lg:mt-20">
        {/* book-1 */}
        <AnimatedDiv variant="fadeInUp" delay={0.4}>
          <div className="max-w-[224px] relative w-full md:max-w-sm">
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
          <div className="max-w-[224px] w-full md:max-w-sm">
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

        {/* book-3 */}
        <AnimatedDiv variant="fadeInUp" delay={0.4}>
          <div className="max-w-[224px] w-full md:max-w-sm">
            <Image
              src="/shelby.webp"
              alt="book image of Shelby"
              width={0}
              height={0}
              sizes="100vw (max-width: 896px) 45vw"
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
            <Link href="/books/shelby">
              <Button />
            </Link>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default BooksPage;

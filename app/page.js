import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import HomeReview from "./components/HomeReview";
import AnimatedDiv from "./components/AnimatedDiv";
import Hr from "./components/Hr";

export default function Home() {
  return (
    <>
      {/* New Book Hero Section */}
      <section className="container_pad mx-auto max-w-screen-2xl pb-16 pt-[124px] md:pt-[136px]">
        <div className="flex flex-col-reverse items-center justify-center gap-14 overflow-hidden py-6 md:flex-row lg:gap-16 lg:py-16 xl:gap-20">
          <AnimatedDiv variant="fadeInRight" delay={0.4}>
            <div className="max-w-sm">
              {" "}
              <h3 className="mb-5 max-w-full text-center text-lg font-medium leading-none tracking-tight text-primary md:max-w-[240px] md:text-left md:text-xl xl:text-2xl">
                Latest Release By Natalia Davies
              </h3>
              <div className="mx-auto mb-4 w-fit border-l-4 border-primary pl-5 md:mx-0">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                  ECHOES OF <br /> EXISTENCE
                </h1>
              </div>
              <p className="mb-6 text-center font-light md:text-left md:text-lg lg:mb-8 lg:text-xl">
                A journey of loss, love and self-discovery.
              </p>
              <Link
                href="/books/echoes-of-existence"
                className="mx-auto block w-fit md:mx-0"
              >
                <Button />
              </Link>
            </div>
          </AnimatedDiv>
          <AnimatedDiv variant="fadeInLeft" delay={0.4}>
            <Image
              src="/echobook.webp"
              alt="book image of Echoes of Existence"
              width={0}
              height={0}
              sizes="100vw (max-width: 896px) 45vw"
              className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
              priority={true}
            />
          </AnimatedDiv>
        </div>
      </section>
      {/* New Book Hero Section End */}

      <Hr />

      {/* BOOKS Section */}
      <section className="container_pad mt-8 text-center lg:mt-14">
        <AnimatedDiv variant="fadeInUp">
          {/* <h3 className="mb-3 text-lg font-semibold text-primary lg:mb-4 lg:text-2xl">
            FINANCE AND INNOVATION
          </h3> */}
          <h2 className="text-3xl font-bold underline text-primary decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            BOOKS
          </h2>
        </AnimatedDiv>

        {/* books */}
        <div className="mx-auto mt-24 flex max-w-screen-md flex-col items-center justify-center gap-16 md:flex-row md:gap-10 lg:mt-32">
          {/* book-1 */}
          <AnimatedDiv variant="fadeInUp" delay={0.4}>
            <div className="max-w-[224px] w-full relative md:max-w-sm">
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
      {/* BOOKS Section end */}

      {/* ABOUT Section */}
      <section className="container_pad mx-auto mt-20 max-w-screen-2xl py-16 md:py-20 lg:mt-36">
        <AnimatedDiv variant="fadeInUp">
          {/* <h3 className="mb-3 text-center text-lg font-semibold text-primary lg:mb-4 lg:text-2xl">
            ABOUT THE AUTHOR
          </h3> */}
          <div className="mx-auto mb-10 w-fit pb-6">
            <h2 className="text-center text-3xl text-primary underline decoration-primary underline-offset-[40px] font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">
              ABOUT THE AUTHOR
            </h2>
          </div>
        </AnimatedDiv>
        {/* <h2 className="text-center text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
          ARNOLD PECKHAM
        </h2> */}

        {/* about */}
        <div className="mt-20 grid gap-16 md:grid-cols-12 lg:mt-24">
          <div className="relative mx-auto w-fit md:col-span-4 md:mx-0">
            {/* image */}

            <div className="top-[72px] mx-auto w-fit md:sticky md:mx-0">
              <AnimatedDiv variant="fadeInUp" delay={0.4}>
                <div className="rounded w-full max-w-[240px] lg:max-w-xs">
                  <Image
                    src="/natalia.webp"
                    alt="Natalia Davies' image"
                    width={0}
                    height={0}
                    sizes="100vw (max-width: 896px) 45vw"
                    className="h-auto w-full"
                    // priority={true}
                  />
                </div>
              </AnimatedDiv>
            </div>

            {/* social-icons */}
            <div className="absolute -bottom-10 left-1/2 z-10 flex w-full max-w-44 -translate-x-1/2 justify-center gap-4 rounded bg-blackish px-3 py-4 shadow-2xl">
              <Link href="#" className="hover:opacity-65 active:opacity-100">
                <Image
                  src="/facebook.svg"
                  alt="Facebook icon"
                  width={40}
                  height={40}
                  // sizes="100vw (max-width: 896px) 45vw"
                  // className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
                  // priority={true}
                />
              </Link>
              <Link href="#" className="hover:opacity-65 active:opacity-100">
                <Image
                  src="/x.svg"
                  alt="Twitter-X icon"
                  width={40}
                  height={40}
                  // sizes="100vw (max-width: 896px) 45vw"
                  // className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
                  // priority={true}
                />
              </Link>
              <Link href="#" className="hover:opacity-65 active:opacity-100">
                <Image
                  src="/instagram.svg"
                  alt="Instagram icon"
                  width={40}
                  height={40}
                  // sizes="100vw (max-width: 896px) 45vw"
                  // className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
                  // priority={true}
                />
              </Link>
            </div>
          </div>

          {/* txt */}
          <div className="md:col-span-8 ">
            {/* <AnimatedDiv variant="fadeInRight" delay={0.7}> */}
            <div className="overflow-x-hidden">
              <AnimatedDiv variant="fadeInRight" delay={0.7}>
                <h4 className="mb-6 mt-8 text-2xl lg:text-3xl font-medium lg:mt-12">
                  Natalia Davies - reflective mystery writer
                </h4>
                <p className="mb-5 text-base lg:text-lg lg:leading-8 font-light leading-7">
                  Natalia Davies is a celebrated author known for her
                  captivating storytelling and evocative narratives that blend
                  mystery, introspection, and human emotion. With a keen eye for
                  detail and a profound understanding of the human psyche,
                  Natalia weaves compelling tales that resonate with readers on
                  a deep level.
                  <br />
                  <br />
                  Her novels delve into themes of loss, love, identity, and
                  redemption, inviting readers to explore the complexities of
                  life through the lens of unforgettable characters and gripping
                  plots. Discover Natalia Davies' world of literary intrigue and
                  embark on a journey of discovery through her captivating
                  novels.
                </p>
                {/* <Link href="/about">
                  <Button />
                </Link> */}
              </AnimatedDiv>
            </div>
            {/* <Link href="/about">
                <Button />
              </Link> */}
            {/* </AnimatedDiv> */}
            <AnimatedDiv variant="fadeInUp" delay={0.2}>
              <Link href="/about">
                <Button />
              </Link>
            </AnimatedDiv>
          </div>
        </div>
      </section>
      {/* ABOUT Section end */}

      {/* REVIEW Section */}
      <section className="container_pad mt-20 text-center lg:mt-36">
        <AnimatedDiv variant="fadeInUp">
          <h3 className="mb-3 text-lg font-semibold lg:mb-4 lg:text-2xl">
            WHAT READERS ARE SAYING
          </h3>
          <h2 className="text-3xl text-primary font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            REVIEWS
          </h2>
        </AnimatedDiv>

        {/* reviews */}
        <div className="mx-auto mt-20 lg:mt-24">
          <AnimatedDiv variant="fadeInUp" delay={0.4}>
            <HomeReview />
          </AnimatedDiv>
        </div>
      </section>
      {/* REVIEW Section end */}
    </>
  );
}

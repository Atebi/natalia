import React from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "../components/Form";
import AnimatedDiv from "../components/AnimatedDiv";

const ContactPage = () => {
  return (
    <section className="container_pad mx-auto mt-[72px] max-w-screen-2xl pt-14 xl:pt-16">
      <AnimatedDiv variant="fadeInUp">
        <div className="w-fit mb-10 lg:mb-16 mx-auto p-4 rounded-tl-3xl rounded-br-3xl bg-gray/50">
          <h1 className="text-center rounded-bl-3xl rounded-tr-3xl text-3xl font-bold md:text-4xl xl:text-5xl">
            CONTACT ME
          </h1>
        </div>
      </AnimatedDiv>
      {/* contact */}
      <div className="grid gap-14 md:grid-cols-12 lg:gap-20">
        <div className="relative mx-auto w-fit md:col-span-4 md:mx-0">
          {/* image */}
          <div className="top-[72px] mx-auto w-fit md:sticky md:mx-0">
            <AnimatedDiv variant="fadeInUp" delay={0.2}>
              <div className="rounded">
                <Image
                  src="/natalia.webp"
                  alt="Natalia Davies' image"
                  width={0}
                  height={0}
                  sizes="100vw (max-width: 896px) 45vw"
                  className="h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
                  // priority={true}
                />
              </div>
            </AnimatedDiv>
            {/* social-icons */}
            <AnimatedDiv variant="fadeInLeft" delay={1}>
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
            </AnimatedDiv>
          </div>
        </div>

        {/* form */}
        <div className="mt-16 max-w-2xl md:col-span-8 md:mt-8">
          {/* <AnimatedDiv variant="fadeInRight" delay={0.4}>
            <div className="mb-10 w-fit border-b-4 border-primary pb-6">
              <h1 className=" text-4xl font-extrabold leading-none tracking-tight  md:text-5xl xl:text-6xl">
                GET IN TOUCH
              </h1>
            </div>
          </AnimatedDiv> */}

          <AnimatedDiv variant="fadeInUp" delay={0.7}>
            <p className="mb-6 md:text-lg lg:mb-8 lg:text-xl">
              Please send me a message. I’d love to hear from you!
            </p>
          </AnimatedDiv>

          {/* FORM */}
          <AnimatedDiv variant="fadeInUp" delay={1}>
            <Form />
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

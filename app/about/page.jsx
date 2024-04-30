import Link from "next/link";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";

const AboutPage = () => {
  return (
    <section className="container_pad mx-auto mt-[72px] max-w-screen-2xl pt-14 xl:pt-16">
      {/* <h3 className="mb-3 text-center text-lg font-semibold text-primary lg:mb-4 lg:text-2xl">
        ABOUT THE AUTHOR
      </h3> */}
      <AnimatedDiv variant="fadeInUp">
        <div className="w-fit mb-10 lg:mb-16 mx-auto p-4 rounded-tl-3xl rounded-br-3xl bg-gray/50">
          <h1 className="text-center rounded-bl-3xl rounded-tr-3xl text-3xl font-bold md:text-4xl xl:text-5xl">
            NATALIA DAVIES
          </h1>
        </div>
      </AnimatedDiv>

      {/* about */}
      <div className="grid gap-14 md:grid-cols-12 lg:gap-20">
        <div className="relative mx-auto w-fit md:col-span-4 md:mx-0">
          {/* image */}
          <div className="top-[72px] mx-auto w-fit md:sticky md:mx-0">
            <AnimatedDiv variant="fadeInUp" delay={0.2}>
              <div className="rounded shadow-2xl">
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

        {/* txt */}
        <div className="mt-16 overflow-hidden md:col-span-8 md:mt-8">
          {/* <AnimatedDiv variant="fadeInRight" delay={0.6}>
            <div className="mb-10 w-fit border-b-4 border-primary pb-6">
              <h1 className=" text-4xl font-extrabold leading-none tracking-tight  md:text-5xl xl:text-6xl">
                ABOUT ARNOLD <br /> PECKHAM
              </h1>
            </div>
          </AnimatedDiv> */}
          <AnimatedDiv variant="fadeInUp" delay={1}>
            <p className="text-base md:text-lg md:leading-8 leading-7">
              Natalia Davies is an accomplished author renowned for her
              distinctive blend of mystery and introspection in contemporary
              fiction. Born with a passion for storytelling, Natalia channels
              her creativity into crafting narratives that explore the depths of
              human experience and emotion. Drawing inspiration from personal
              experiences and a profound fascination with the complexities of
              life, Natalia's novels delve into themes of resilience,
              transformation, and the search for meaning in a world filled with
              uncertainties.
              <br />
              <br />
              Natalia's latest novel, "Echoes of Existence," garnered critical
              acclaim for its poignant portrayal of loss and self-discovery,
              setting the stage for a series of compelling works that have
              captivated readers worldwide. From the enigmatic intrigue of "Red
              Sign" to the introspective exploration of "Shelby," Natalia's
              storytelling prowess shines through, inviting readers to immerse
              themselves in thought-provoking narratives that leave a lasting
              impact.
              <br />
              <br />
              When she's not writing, Natalia finds inspiration in nature, art,
              and everyday encounters, infusing her work with vivid imagery and
              rich emotional depth. Join Natalia Davies on a journey of literary
              exploration and discover the hidden truths that await within the
              pages of her captivating novels.
            </p>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div>
      <div className=" flex w-full max-w-44 justify-center gap-4 rounded px-3">
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
  );
};

export default Socials;

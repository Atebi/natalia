import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import Button from "./Button";
import Hr from "./Hr";

const Newsletter = () => {
  return (
    <div id="newsletter" className="container_pad py-20 text-center">
      <Hr />
      <div className="mx-auto max-w-xl lg:max-w-2xl">
        <AnimatedDiv variant="fadeInUp">
          <h3 className="mb-3 text-center text-lg font-semibold text-primary lg:mb-4 lg:text-2xl">
            STAY UP TO DATE
          </h3>
          <h2 className="text-center text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            NEWSLETTER
          </h2>

          <p className="mb-8 mt-20 text-base lg:text-2xl md:text-xl">
            Subscribe to my newsletter and get updates about upcoming books,
            exclusive discounts and events.
          </p>

          {/* sign-up form */}
          <div className="mx-auto w-full max-w-sm">
            <form>
              <div className="mb-2">
                <label
                  className="mb-1 block hidden text-base text-neutral-500"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className={`w-full appearance-none rounded border border-milk bg-transparent px-3 py-4 leading-tight caret-primary hover:bg-gray/30 hover:border-white focus:border-primary focus:bg-transparent focus:outline-none`}
                  // value={email}
                  placeholder="Name"
                  autoComplete="on"
                  id="name"
                  type="name"
                  required
                  // onChange={(e) => setEmail(e.target.value)}
                  // onFocus={toggleColour}
                  // onBlur={toggleColour}
                />
              </div>
              <div className="mb-2 lg:col-span-7">
                <label
                  className="mb-1 block hidden text-base text-neutral-500"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`w-full appearance-none rounded border border-milk bg-transparent px-3 py-4 leading-tight caret-primary hover:bg-gray/30 hover:border-white focus:border-primary focus:bg-transparent focus:outline-none`}
                  // value={email}
                  placeholder="Email"
                  autoComplete="on"
                  id="email"
                  type="email"
                  required
                  // onChange={(e) => setEmail(e.target.value)}
                  // onFocus={toggleColour}
                  // onBlur={toggleColour}
                />
              </div>
              <Button text="SUBSCRIBE" />
            </form>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default Newsletter;

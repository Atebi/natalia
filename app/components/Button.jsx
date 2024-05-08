import React from "react";

const Button = ({ text = "LEARN MORE" }) => {
  return (
    <button className="rounded bg-blackish px-5 py-3 text-base font-medium text-primary  ring-1 focus:outline-none focus:ring-4 ring-milk hover:bg-primary hover:text-blackish focus:bg-blackish focus:text-primary transition duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default Button;

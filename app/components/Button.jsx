import React from "react";

const Button = ({ text = "LEARN MORE" }) => {
  return (
    <button className="rounded bg-blackish px-5 py-3 text-base font-medium text-primary border border-milk hover:bg-primary hover:text-blackish focus:border-4 focus:bg-blackish focus:text-primary">
      {text}
    </button>
  );
};

export default Button;

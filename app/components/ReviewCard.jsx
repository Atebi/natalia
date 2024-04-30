import React from "react";
import Link from "next/link";

const ReviewCard = ({ review, reviewer, link, linkText }) => {
  return (
    <div className="mx-auto px-10">
      <em className="mb-3 block text-base lg:text-xl font-light">{review}</em>
      <cite className="block text-xl lg:text-2xl font-medium italic">
        - {reviewer}
      </cite>
      {typeof link === "string" && (
        <Link
          href={link}
          className="mx-auto mb-2 hover:opacity-60 active:opacity-100 mt-0.5 block w-fit lg:text-lg font-medium text-primary underline"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default ReviewCard;

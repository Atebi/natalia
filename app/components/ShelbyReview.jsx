import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "./Slider";

const reviews = [
  <ReviewCard
    review={`" 'Shelby' is a thought-provoking and atmospheric novel that explores themes of identity and redemption through the enigmatic character of Shelby. Natalia Davies' writing is immersive and poetic, drawing readers into a world of shadows and self-discovery. A compelling and introspective read. "`}
    reviewer="Literary Labyrinth"
  />,
  <ReviewCard
    review={`“ Natalia Davies' 'Shelby' is a haunting and beautifully written novel that delves deep into the complexities of human nature. Through Shelby's journey of self-discovery, Davies navigates themes of trauma and transformation with sensitivity and depth. An evocative and unforgettable literary experience. ”`}
    reviewer="Amazon Customer"
  />,
  <ReviewCard
    review={`“ In 'Shelby,' Natalia Davies crafts a mesmerizing narrative that challenges perceptions and invites introspection. Shelby's mysterious past and quest for truth make for a captivating read filled with poignant moments and unexpected revelations. Davies' storytelling is both haunting and heartfelt. ”`}
    reviewer="Bookish Serenity"
  />,
  <ReviewCard
    review={`“ ‘Shelby' is a compelling exploration of identity and resilience that showcases Natalia Davies' talent for character-driven storytelling. Through rich prose and intricate plotting, Davies paints a vivid portrait of Shelby's journey towards self-acceptance and healing. This novel is a testament to the enduring power of storytelling. ”`}
    reviewer="Literary Lens"
  />,
];

const ShelbyReview = () => {
  return (
    <div className="mx-auto max-w-2xl py-8">
      <Slider reviews={reviews} />
    </div>
  );
};

export default ShelbyReview;

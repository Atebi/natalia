import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "./Slider";

const reviews = [
  <ReviewCard
    review={`“ A gripping and heartfelt story that lingers in the mind long after the final page. 'Echoes of Existence' showcases Natalia Davies' talent for crafting emotionally resonant narratives. The exploration of memory and identity against the backdrop of a mysterious forest is both captivating and beautifully rendered. ”`}
    reviewer="Literary Lens"
    link="/books/echoes-of-existence"
    linkText="Echoes of Existence"
  />,
  <ReviewCard
    review={`“ Natalia Davies delivers a compelling blend of mystery and introspection in 'Echoes of Existence.' Through vivid imagery and deep character exploration, Davies brings to life the echoes of the past that shape the present. This novel is a testament to the power of storytelling and its ability to illuminate the human experience. ”`}
    reviewer="Novel Book Reviews"
    link="/books/echoes-of-existence"
    linkText="Echoes of Existence"
  />,
  <ReviewCard
    review={`" Prepare to be enthralled by Natalia Davies' gripping mystery, 'Red Sign.' The arrival of the mysterious red sign sets off a chain of captivating events in a small town filled with secrets. Davies skilfully navigates suspense and intrigue, keeping readers guessing until the very end. A suspenseful and satisfying read! "`}
    reviewer="Thriller Enthusiast Magazine"
    link="/books/red-sign"
    linkText="Red Sign"
  />,
  <ReviewCard
    review={`" 'Shelby' is a thought-provoking and atmospheric novel that explores themes of identity and redemption through the enigmatic character of Shelby. Natalia Davies' writing is immersive and poetic, drawing readers into a world of shadows and self-discovery. A compelling and introspective read. "`}
    reviewer="Literary Labyrinth"
    link="/books/shelby"
    linkText="Shelby"
  />,
];

const HomeReview = () => {
  return (
    <div className="mx-auto max-w-2xl py-8">
      <Slider reviews={reviews} />
    </div>
  );
};

export default HomeReview;

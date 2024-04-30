import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "./Slider";

const reviews = [
  <ReviewCard
    review={`“ A gripping and heartfelt story that lingers in the mind long after the final page. 'Echoes of Existence' showcases Natalia Davies' talent for crafting emotionally resonant narratives. The exploration of memory and identity against the backdrop of a mysterious forest is both captivating and beautifully rendered. ”`}
    reviewer="Literary Lens"
  />,
  <ReviewCard
    review={`“ Natalia Davies delivers a compelling blend of mystery and introspection in 'Echoes of Existence.' Through vivid imagery and deep character exploration, Davies brings to life the echoes of the past that shape the present. This novel is a testament to the power of storytelling and its ability to illuminate the human experience. ”`}
    reviewer="Novel Book Reviews"
  />,
  <ReviewCard
    review={`" Natalia Davies weaves a mesmerizing tale in 'Echoes of Existence,' where the haunting imagery of the forest mirrors the emotional journey of protagonist Alice. This introspective novel delves deep into themes of loss and healing, offering a poignant exploration of the human spirit. A must-read for anyone seeking a thought-provoking and beautifully written story. "`}
    reviewer="Bookish Wanderer"
  />,
  <ReviewCard
    review={`“ In 'Echoes of Existence,' Natalia Davies skillfully captures the complexities of grief and self-discovery through the character of Alice. The atmospheric descriptions of the forest engulfed in fog add a haunting layer to this evocative narrative. Davies' lyrical prose invites readers to immerse themselves in Alice's journey of resilience and redemption. ”`}
    reviewer="Amazon Customer"
  />,
];

const EchoesReview = () => {
  return (
    <div className="mx-auto max-w-2xl py-8">
      <Slider reviews={reviews} />
    </div>
  );
};

export default EchoesReview;

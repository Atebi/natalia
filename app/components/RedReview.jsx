import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "./Slider";

const reviews = [
  <ReviewCard
  review={`" Prepare to be enthralled by Natalia Davies' gripping mystery, 'Red Sign.' The arrival of the mysterious red sign sets off a chain of captivating events in a small town filled with secrets. Davies skilfully navigates suspense and intrigue, keeping readers guessing until the very end. A suspenseful and satisfying read! "`}
  reviewer="Thriller Enthusiast Magazine"
  
/>,
  <ReviewCard
    review={`“ ’Red Sign' is a masterfully crafted mystery that keeps you guessing until the final revelation. Natalia Davies excels at creating tension and intrigue, and the town's reaction to the red sign adds depth to the narrative. An engrossing and satisfying read for fans of suspense. ”`}
    reviewer="Mystery Maven Reviews"
  />,
  <ReviewCard
    review={`“ Natalia Davies' 'Red Sign' is a riveting mystery filled with twists and turns. The ominous presence of the red sign adds an eerie atmosphere to this captivating tale of secrets and deception. Davies' ability to create complex characters and intricate plotlines makes this novel a must-read for mystery enthusiasts. ”`}
    reviewer="Amazon Customer"
  />,
  <ReviewCard
    review={`“ With 'Red Sign,' Natalia Davies creates a compelling tapestry of suspense and human drama. The characters are vividly drawn, and the impact of the red sign on the town is palpable. Davies' storytelling is both gripping and atmospheric, making this novel a standout in the mystery genre. ”`}
    reviewer="Plot Twist Gazette"
  />,
];

const RedReview = () => {
  return (
    <div className="mx-auto max-w-2xl py-8">
      <Slider reviews={reviews} />
    </div>
  );
};

export default RedReview;

import styles from "./TestimonialsList.module.css";
import { Customer_1, Customer_2, Customer_3 } from "../../assets/Images/Home";
import { TestimonialsItem } from "./index";
import { useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../assets/Icons";

const POSITION_CONSTRAINTS = {
  max: 2,
  min: 0,
};

const TestimonialsList = () => {
  const [currentSlidingPosition, setCurrentSlidingPosition] = useState(0);

  const handleSlideToLeft = () => {
    setCurrentSlidingPosition((prevState) => {
      if (prevState - 1 < POSITION_CONSTRAINTS.min) {
        return POSITION_CONSTRAINTS.max;
      }
      return --prevState;
    });
  };

  const handleSlideToRight = () => {
    setCurrentSlidingPosition((prevState) => {
      if (prevState + 1 > POSITION_CONSTRAINTS.max) {
        return POSITION_CONSTRAINTS.min;
      }
      return ++prevState;
    });
  };

  return (
    <ul className={styles.reviews}>
      <LeftArrowIcon className={styles.slideLeft} onClick={handleSlideToLeft} />
      <RightArrowIcon
        className={styles.slideRight}
        onClick={handleSlideToRight}
      />

      <TestimonialsItem
        position={0}
        currentSlidingPosition={currentSlidingPosition}
        image={Customer_1}
        name="michael anderson"
        content="The Nut Lab Collections are great presents! An ideal small gift to send to friends who would love to add something special into their cereals."
      />
      <TestimonialsItem
        position={1}
        currentSlidingPosition={currentSlidingPosition}
        image={Customer_2}
        name="Chelsea Olivia"
        content="Wow! Such a wonderful and smooth taste, I love their almond nuts and definitely my favourite. I also love that how dedicated they are to nut sourcing and producing"
      />
      <TestimonialsItem
        position={2}
        currentSlidingPosition={currentSlidingPosition}
        image={Customer_3}
        name="Katie Simmons"
        content="I have bought twice from them and I like the quality of their hazelnuts. They are delivered quickly in lovely glass jars. Definitely recommend!” "
      />
    </ul>
  );
};

export default TestimonialsList;

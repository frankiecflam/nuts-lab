import styles from "./TestimonialsList.module.css";
import { Customer_1, Customer_2, Customer_3 } from "../../assets/Images/Home";
import { TestimonialsItem } from "./index";
import { useState, useEffect } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../assets/Icons";
import { SLIDING_POSITION } from "../../utils/constants/index";

const TestimonialsList = () => {
  const [currentSlidingPosition, setCurrentSlidingPosition] = useState(0);

  useEffect(() => {
    const slidingInterval = setInterval(() => {
      handleSlideToRight();
    }, 5000);

    return () => {
      clearInterval(slidingInterval);
    };
  }, []);

  const handleSlideToLeft = () => {
    setCurrentSlidingPosition((prevState) => {
      if (prevState - 1 < SLIDING_POSITION.min) {
        return SLIDING_POSITION.max;
      }
      return --prevState;
    });
  };

  const handleSlideToRight = () => {
    setCurrentSlidingPosition((prevState) => {
      if (prevState + 1 > SLIDING_POSITION.max) {
        return SLIDING_POSITION.min;
      }
      return ++prevState;
    });
  };

  const handleSlideToPosition = (position: number) => {
    setCurrentSlidingPosition(position);
  };

  return (
    <ul className={styles.reviews}>
      {/* Sliding Arrows */}
      <LeftArrowIcon className={styles.slideLeft} onClick={handleSlideToLeft} />
      <RightArrowIcon
        className={styles.slideRight}
        onClick={handleSlideToRight}
      />

      {/* Sliding Dots */}
      <div className={styles.slideDots}>
        <div
          className={
            currentSlidingPosition === 0
              ? `${styles.slideDot} ${styles.active}`
              : styles.slideDot
          }
          onClick={() => handleSlideToPosition(0)}
        />
        <div
          className={
            currentSlidingPosition === 1
              ? `${styles.slideDot} ${styles.active}`
              : styles.slideDot
          }
          onClick={() => handleSlideToPosition(1)}
        />
        <div
          className={
            currentSlidingPosition === 2
              ? `${styles.slideDot} ${styles.active}`
              : styles.slideDot
          }
          onClick={() => handleSlideToPosition(2)}
        />
      </div>

      {/* Customer Review */}
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

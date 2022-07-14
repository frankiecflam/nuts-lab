import styles from "./TestimonialsItem.module.css";
import Image, { StaticImageData } from "next/image";
import { StarIcon } from "../../assets/Icons/index";

interface TestimonialsItemProps {
  image: StaticImageData;
  name: string;
  content: string;
  position: number;
  currentSlidingPosition: number;
}

const TestimonialsItem = ({
  image,
  name,
  content,
  position,
  currentSlidingPosition,
}: TestimonialsItemProps) => {
  return (
    <li
      className={`${styles.review}`}
      data-position={position - currentSlidingPosition}
    >
      <div className={styles.reviewHeader}>
        <Image
          src={image}
          layout="fixed"
          width="100"
          height="100"
          className={styles.customerPicture}
          alt={`picture of customer — ${name}`}
        />
        <div className={styles.customerRating}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p className={styles.customerName}>{name}</p>
      </div>
      <div className={styles.reviewBody}>
        <p className={styles.reviewContent}>&quot;{content}&quot;</p>
      </div>
    </li>
  );
};

export default TestimonialsItem;

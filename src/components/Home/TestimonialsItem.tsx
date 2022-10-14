import styles from "./TestimonialsItem.module.css";
import Image, { StaticImageData } from "next/image";
import { StarIcon } from "../../assets/Icons/index";

interface TestimonialsItemProps {
  image: StaticImageData;
  name: string;
  content: string;
  position: number;
  currentSlidingPosition: number;
  rating: 1 | 2 | 3 | 4 | 5;
}

const TestimonialsItem = ({
  image,
  name,
  content,
  position,
  currentSlidingPosition,
  rating,
}: TestimonialsItemProps) => {
  const ratingIcons = new Array(rating).fill(<StarIcon />);

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
        <ul className={styles.customerRating}>
          {ratingIcons.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </ul>
        <p className={styles.customerName}>{name}</p>
      </div>
      <div className={styles.reviewBody}>
        <p className={styles.reviewContent}>&quot;{content}&quot;</p>
      </div>
    </li>
  );
};

export default TestimonialsItem;

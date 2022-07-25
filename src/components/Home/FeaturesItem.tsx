import styles from "./FeaturesItems.module.css";
import Image, { StaticImageData } from "next/image";
import { LoadingSpinner } from "../UI";
import { useState } from "react";

interface FeaturesItemProp {
  src: StaticImageData;
  alt: string;
  children: React.ReactNode;
}

const FeaturesItem = ({ src, alt, children }: FeaturesItemProp) => {
  const [imageIsLoading, setImageIsLoading] = useState(true);

  return (
    <>
      <div className={styles.featuresImageDiv}>
        {imageIsLoading && <LoadingSpinner />}
        <Image
          src={src}
          alt={alt}
          className={styles.featureImage}
          layout="fill"
          onLoad={() => setImageIsLoading(false)}
        />
      </div>
      <div className={styles.featureItem}>{children}</div>
    </>
  );
};

export default FeaturesItem;

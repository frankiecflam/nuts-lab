import { StaticImageData } from "next/image";
import styles from "./InstagramFeedItem.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InstagramFeedImageProps {
  src: string;
  href: string;
}

const InstagramFeedImage = React.forwardRef<
  HTMLAnchorElement,
  InstagramFeedImageProps
>(({ src, href }, ref) => {
  return (
    <a ref={ref} href={href} target="_blank">
      <Image src={src} layout="responsive" width="1920" height="2880" />
    </a>
  );
});

interface InstagramFeedItemProps {
  src: StaticImageData;
  href: string;
}

const InstagramFeedItem = ({ src, href }: InstagramFeedItemProps) => {
  return (
    <li className={styles.feedItem}>
      <Link href={href} className={styles.feedLink}>
        <InstagramFeedImage src={src.src} href={href} />
      </Link>
    </li>
  );
};

export default InstagramFeedItem;

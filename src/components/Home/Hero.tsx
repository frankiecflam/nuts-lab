import { Section } from "../Section/index";
import styles from "./Hero.module.css";
import Container from "../UI/Container";
import { Hero_Bg } from "../../assets/Images/Home/index";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../UI";

const Hero = () => {
  return (
    <Section className={styles.hero}>
      <Image
        src={Hero_Bg}
        layout="fill"
        className={styles.bgImg}
        priority={true}
        alt="background image of hero section"
      />
      <Container className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.headingPrimary}>Natural, Finest</h1>
          <h2 className={styles.headingSecondary}>
            Supply high-quality nuts since 1982
          </h2>
          <p className={styles.description}>
            We know a thing or two about nuts. We’ve got over 70 years’
            experience in nut sourcing and processing, and work closely with
            manufacturers, retailers and consumers so we know the business
            inside out.
          </p>
          <Link href="/products">
            <a className={styles.ctaBtn}>
              <Button type="button" name="discover" />
            </a>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;

{
  /* <h1 className={styles.headingPrimary}>Natural, Finest</h1>
          <h2 className={styles.headingSecondary}>
            Supply high-quality nuts since 1982
          </h2>
          <p className={styles.description}>
            We know a thing or two about nuts. We’ve got over 70 years’
            experience in nut sourcing and processing, and work closely with
            manufacturers, retailers and consumers so we know the business
            inside out.
          </p> */
}

import styles from "./AboutUs.module.css";
import { Section, SectionHeader, SectionBody } from "../Section";
import Container from "../UI/Container";
import AboutUsImage from "../../assets/Images/About/About_1920x2880.webp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Section className={styles.about}>
      <Container>
        <SectionHeader title="about us" />
        <SectionBody className={styles.aboutBody}>
          <div className={styles.textContent}>
            <p>
              Nuts Lab has dedicated to making natural and finest nuts in the UK
              since 1982.
            </p>
            <p>
              Our nuts are simple but versatile. Every nut is made 100%
              naturally, with no added oil, salt, sugar or additives, and is
              gluten and dairy free.
            </p>
            <p>
              We source top-quality ingredients from local farmers, and
              regularly visit our suppliers and their farms to ensure that
              nothing but care goes into creating the best raw ingredients for
              our products.
            </p>
            <p>
              At Nuts Lab, we love nuts, and we can’t get enough of creating
              delicious products for our consumers. From sourcing raw materials
              to delivering the finished article to your door, quality is at the
              heart of everything we do.
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src={AboutUsImage}
              layout="fill"
              priority={true}
              alt="picture of a bowl of nuts"
            />
          </div>
        </SectionBody>
      </Container>
    </Section>
  );
};

export default AboutUs;

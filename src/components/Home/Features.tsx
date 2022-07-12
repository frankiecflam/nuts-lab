import styles from "./Features.module.css";
import Container from "../UI/Container";
import { Section, SectionHeader, SectionBody } from "../Section/index";
import { Believe, Secrets } from "../../assets/Images/Home/index";
import Image from "next/image";

const Features = () => {
  return (
    <Section>
      <Container>
        <SectionHeader title="features" />
        <SectionBody className={styles.features}>
          <Image
            src={Secrets}
            alt="picture of farmer planting seeds"
            className={styles.featureImage}
          />
          <div className={styles.featureItem}>
            <h1 className={styles.featureItemHeading}>Our secrets to nuts</h1>
            <p className={styles.featureItemDescription}>
              We source our nuts directly from local farmers with strong
              emphasis on naturality, deliciousness and food safety. Our quality
              specialists always do their best monitoring the entire sourcing
              process, making sure that only high-quality nuts are sold to
              customers.
            </p>
          </div>
          <Image
            src={Believe}
            className={styles.featureImage}
            alt="picture of us working in a local farm"
          />
          <div className={styles.featureItem}>
            <h1 className={styles.featureItemHeading}>What we believe</h1>
            <p className={styles.featureItemDescription}>
              We make products we can be proud of. We pour heart and soul into
              everything we do, and every pack that leaves our factory is of the
              highest quality. We make products which our customers love and
              enjoy, keeping them coming back for more.
            </p>
          </div>
        </SectionBody>
      </Container>
    </Section>
  );
};

export default Features;

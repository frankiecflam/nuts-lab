import styles from "./Features.module.css";
import Container from "../UI/Container";
import { Section, SectionHeader, SectionBody } from "../Section/index";
import { Believe, Secrets } from "../../assets/Images/Home/index";
import { FeaturesItem } from "./index";

const Features = () => {
  return (
    <Section>
      <Container>
        <SectionHeader title="features" />
        <SectionBody className={styles.features}>
          <FeaturesItem src={Secrets} alt="picture of farmer planting seeds">
            <h1 className={styles.featureItemHeading}>Our secrets to nuts</h1>
            <p className={styles.featureItemDescription}>
              We source our nuts directly from local farmers with strong
              emphasis on naturality, deliciousness and food safety. Our quality
              specialists always do their best monitoring the entire sourcing
              process, making sure that only high-quality nuts are sold to
              customers.
            </p>
          </FeaturesItem>

          <FeaturesItem
            src={Believe}
            alt="picture of us walking around the farm of our local suppliers"
          >
            <h1 className={styles.featureItemHeading}>What we believe</h1>
            <p className={styles.featureItemDescription}>
              We make products we can be proud of. We pour heart and soul into
              everything we do, and every pack that leaves our factory is of the
              highest quality. We make products which our customers love and
              enjoy, keeping them coming back for more.
            </p>
          </FeaturesItem>
        </SectionBody>
      </Container>
    </Section>
  );
};

export default Features;

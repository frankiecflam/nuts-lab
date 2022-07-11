import styles from "./InstagramFeed.module.css";
import Container from "../UI/Container";
import { Section, SectionHeader, SectionBody } from "../Section/index";
import { InstagramFeedItem } from "./index";
import {
  Instafeed_1,
  Instafeed_2,
  Instafeed_3,
  Instafeed_4,
} from "../../assets/Images/Home/index";

const InstagramFeed = () => {
  return (
    <Section>
      <Container>
        <SectionHeader title="instagram feeds" />
        <SectionBody>
          <ul className={styles.feedList}>
            <InstagramFeedItem
              src={Instafeed_1}
              href="https://www.instagram.com/"
            />
            <InstagramFeedItem
              src={Instafeed_2}
              href="https://www.instagram.com/"
            />
            <InstagramFeedItem
              src={Instafeed_3}
              href="https://www.instagram.com/"
            />
            <InstagramFeedItem
              src={Instafeed_4}
              href="https://www.instagram.com/"
            />
          </ul>
        </SectionBody>
      </Container>
    </Section>
  );
};

export default InstagramFeed;

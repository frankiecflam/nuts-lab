import styles from "./TopPicks.module.css";
import { Section, SectionHeader, SectionBody } from "../Section/index";
import Container from "../UI/Container";
import { Product } from "../../types";
import { TopPicksList } from "./index";
import Link from "next/link";
import { Button } from "../UI";

const TopPicks = () => {
  return (
    <Section>
      <Container>
        <SectionHeader title="top picks" />
        <SectionBody className={styles.topPicks}>
          <TopPicksList />
          <Link href="/products">
            <a>
              <Button type="button" name="view all products" />
            </a>
          </Link>
        </SectionBody>
      </Container>
    </Section>
  );
};

export default TopPicks;

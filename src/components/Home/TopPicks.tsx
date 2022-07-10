import styles from "./TopPicks.module.css";
import { Section, SectionHeader, SectionBody } from "../Section/index";
import Container from "../UI/Container";
import { Product } from "../../types";

interface TopPicksProps {
  topPicks: Product[];
}

const TopPicks = ({ topPicks }: TopPicksProps) => {
  return (
    <Section>
      <Container>
        <SectionHeader title="top picks" />
        <SectionBody>
          <ul className={styles.body}>
            {topPicks.map((topPick) => (
              <li key={topPick.id}></li>
            ))}
          </ul>
        </SectionBody>
      </Container>
    </Section>
  );
};

export default TopPicks;

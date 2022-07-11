import { Section, SectionHeader, SectionBody } from "../Section/index";
import Container from "../UI/Container";
import { Product } from "../../types";
import { TopPicksList } from "./index";

interface TopPicksProps {
  topPicks: Product[];
}

const TopPicks = ({ topPicks }: TopPicksProps) => {
  return (
    <Section>
      <Container>
        <SectionHeader title="top picks" />
        <SectionBody>
          <TopPicksList topPicks={topPicks} />
        </SectionBody>
      </Container>
    </Section>
  );
};

export default TopPicks;

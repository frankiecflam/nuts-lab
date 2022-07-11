import styles from "./TopPicksList.module.css";
import { Product } from "../../types/index";
import { ProductItem } from "../Products/index";

interface TopPicksListProps {
  topPicks: Product[];
}

const TopPicksList = ({ topPicks }: TopPicksListProps) => {
  return (
    <ul className={styles.list}>
      {topPicks.map((topPick) => (
        <ProductItem
          id={topPick.id}
          title={topPick.title}
          href="/"
          src={topPick.image}
          price={topPick.price}
        />
      ))}
    </ul>
  );
};

export default TopPicksList;

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
          key={topPick.id}
          title={topPick.title}
          href={`/products/${topPick.id}`}
          src={topPick.image}
          price={topPick.price}
        />
      ))}
    </ul>
  );
};

export default TopPicksList;

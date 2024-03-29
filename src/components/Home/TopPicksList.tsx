import styles from "./TopPicksList.module.css";
import { ProductItem } from "../Products/index";
import { useProducts } from "../../hooks";
import { getTopPicks } from "../../utils/helpers";
import { LoadingSpinner } from "../UI";

const TopPicksList = () => {
  const { isLoading, error, data: products } = useProducts();

  if (isLoading) return <LoadingSpinner />;

  if (error || !products)
    return (
      <div>
        Something went wrong fetching top-pick products from the database!
      </div>
    );

  const topPicks = getTopPicks(products);

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

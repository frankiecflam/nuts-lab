import { GetStaticPaths, GetStaticProps } from "next";
import { getProducts } from "../../../utils/helpers/index";
import { Product } from "../../../types/index";
import type { NextPage } from "next";
import Head from "next/head";
import {
  ProductDetailsContent,
  ProductDetailsRecommendations,
} from "../../../components/Products/index";
import { useCartContext } from "../../../context/CartContext";

interface ProductDetailsPageProps {
  product: Product;
}

const ProductDetails: NextPage<ProductDetailsPageProps> = ({ product }) => {
  const title = `Nuts Lab — ${product.title}`;
  const { addItem } = useCartContext();

  const handleAddItemToCart = ({
    product,
    addToCartQty,
  }: {
    product: Product;
    addToCartQty: number;
  }) => {
    addItem(product, addToCartQty);
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <>
        <ProductDetailsContent
          product={product}
          handleAddItemToCart={handleAddItemToCart}
        />
        <ProductDetailsRecommendations currentProductId={product.id} />
      </>
    </div>
  );
};

export default ProductDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const products = await getProducts();
  const productId = context.params?.id as string;
  const [product] = products.filter((product) => product.id === productId);

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();

  const paths = products.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });

  return {
    fallback: false,
    paths,
  };
};

import { GetStaticPaths, GetStaticProps } from "next";
import {
  getProducts,
  getRecommendedProducts,
} from "../../../utils/helpers/index";
import { Product } from "../../../types/index";
import type { NextPage } from "next";
import Head from "next/head";
import { ProductDetailsContent } from "../../../components/Products/index";

interface ProductDetailsPageProps {
  product: Product;
  recommendedProducts: Product[];
}

const ProductDetails: NextPage<ProductDetailsPageProps> = ({
  product,
  recommendedProducts,
}) => {
  const title = `Nuts Lab — ${product.title}`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <ProductDetailsContent
        product={product}
        recommendedProducts={recommendedProducts}
      />
    </div>
  );
};

export default ProductDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const products = await getProducts();
  const productId = context.params?.id as string;
  const [product] = products.filter((product) => product.id === productId);

  const recommendedProducts = getRecommendedProducts(productId, products, 4);

  return {
    props: {
      product,
      recommendedProducts,
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

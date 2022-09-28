import type { NextPage } from "next";
import Head from "next/head";
import { ProductsContent } from "../../components/Products";
import { Product } from "../../types/index";

interface ProductsPageProps {
  products: Product[];
}

const Products: NextPage<ProductsPageProps> = () => {
  return (
    <div>
      <Head>
        <title>Nuts Lab — Products</title>
        <meta
          name="description"
          content="Nuts Lab is a UK-based nuts retailer wih strong emphasis on naturality, deliciousness and food safety. We have been in business since 1982, and striving to deliver the best nuts. "
        />
      </Head>
      <ProductsContent />
    </div>
  );
};

export default Products;

// export const getStaticProps: GetStaticProps = async (context) => {
//   const products = await getProducts();

//   return {
//     props: {
//       products,
//     },
//   };
// };

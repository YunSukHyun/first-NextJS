import { getProduct, getProducts } from "@/service/products";
import ProductNotFound from "../not-found";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetaData({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}
const Pants = ({ params: { slug } }: Props) => {
  const product = getProduct(slug);
  if (!product) {
    ProductNotFound();
  }
  return <div>{slug} product text</div>;
};

export function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    slug: product,
  }));
}
export default Pants;

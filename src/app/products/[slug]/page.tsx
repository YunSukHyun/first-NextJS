import ProductNotFound from "../not-found";

type Props = {
  params: {
    slug: string;
  };
};
const Pants = ({ params }: Props) => {
  if (params.slug === "nothing") {
    ProductNotFound();
  }
  return <div>{params.slug} product text</div>;
};

export function generateStaticParams() {
  const products = ["params", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
export default Pants;

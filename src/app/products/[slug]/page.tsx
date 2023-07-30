import { getProduct, getProducts } from "@/service/products";
import ProductNotFound from "../not-found";
import Image from "next/image";
import { redirect } from "next/navigation";
import GoProductsButton from "@/components/GoProductsButton";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}
const Produts = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);
  if (!product) {
    redirect("/products");
    // ProductNotFound();
    return;
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그것을 보여줌
  return (
    <>
      <h1>{product?.name} product text</h1>
      <Image
        src={`/images/${product?.image}`}
        alt={product.name}
        width={300}
        height={400}
      />
      <GoProductsButton />
    </>
  );
};

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줌 SSG
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
export default Produts;

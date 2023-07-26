import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
import Image from "next/image";
import Link from "next/link";
import klee from "public/images/banner.jpg";

export const revalidate = 3;
const Products = async () => {
  const products = await getProducts();
  return (
    <>
      <h1>Product Introduction</h1>
      <Image src={klee} alt="klee" />
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
};

export default Products;

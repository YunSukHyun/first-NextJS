import { getProducts } from "@/service/products";
import Link from "next/link";

const Products = () => {
  const products = getProducts();
  return (
    <>
      <h1>Product Introduction</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;

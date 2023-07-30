"use client";

import { useRouter } from "next/navigation";

const GoProductsButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/products");
      }}
    >
      To products page
    </button>
  );
};

export default GoProductsButton;

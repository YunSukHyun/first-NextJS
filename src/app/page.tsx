import os from "os";
import Image from "next/image";
import Counter from "@/components/Counter";
export default function Home() {
  console.log(os.hostname());
  return (
    <>
      <h1>Hompage</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="good"
        width={400}
        height={400}
      />
    </>
  );
}

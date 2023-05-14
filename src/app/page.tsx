import Counter from "@/components/counter";
import NotFound from "./not-found";
import os from "os";
export default function Home() {
  console.log(os.hostname());
  return (
    <>
      <h1>Hompage</h1>
      <Counter />
    </>
  );
}

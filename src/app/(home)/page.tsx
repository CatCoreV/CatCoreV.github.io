import { withBasePath } from "@/lib/paths";

export default function Home() {
  return <a href={withBasePath("/en/")}>Continue to CatCore</a>;
};

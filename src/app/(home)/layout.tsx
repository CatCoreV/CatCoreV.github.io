import type { ReactNode } from "react";
import { withBasePath } from "@/lib/paths";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>CatCore</title>
        <meta httpEquiv="refresh" content={`0;url=${withBasePath("/en/")}`} />
      </head>
      <body>{children}</body>
    </html>
  );
}

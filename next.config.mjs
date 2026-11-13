import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();
var basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import("next").NextConfig} */
const config = {
  "reactStrictMode": true,
  "trailingSlash": true,
  "output": "export",
  "basePath": basePath,
  "env": {
    "NEXT_PUBLIC_BASE_PATH": basePath
  },
  "images": {
    "unoptimized": true
  }
};

export default withMDX(config);

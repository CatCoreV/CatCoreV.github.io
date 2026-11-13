export function withBasePath(url: string): string {
  var basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (!url.startsWith("/") || url.startsWith("//") || url === basePath || url.startsWith(`${basePath}/`)) {
    return url;
  }

  return `${basePath}${url}`;
}

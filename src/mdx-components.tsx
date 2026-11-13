import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { createGenerator } from "fumadocs-typescript";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import * as AccordionComponents from "fumadocs-ui/components/accordion";
import { withBasePath } from "@/lib/paths";

const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => {
      var imageProps = props as Parameters<typeof ImageZoom>[0];
      return <ImageZoom {...imageProps} src={typeof imageProps.src === "string" ? withBasePath(imageProps.src) : imageProps.src} />;
    },
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    ...TabsComponents,
    ...AccordionComponents,
    ...components
  };
}

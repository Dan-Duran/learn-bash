import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";

// Explicitly extend Next.js PageProps for compatibility
type PageProps = {
  params: { slug?: string[] }; // `slug` can be undefined if no params are passed
};

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) {
    notFound(); // Return a 404 page if the document doesn't exist
  }

  return (
    <div className="flex items-start gap-10">
      <div className="flex-[3] pt-10">
        <DocsBreadcrumb paths={slug} />
        <Typography>
          <h1 className="text-3xl -mt-2">{res.frontmatter.title}</h1>
          <p className="-mt-4 text-muted-foreground text-[16.5px]">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      <Toc path={pathName} />
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) return null;

  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

// Generate static paths for all available routes
export function generateStaticParams() {
  // Map all routes to a `slug` array
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1), // Split the path into slug parts
  }));
}

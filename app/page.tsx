"use client";
// /app/page.tsx
import { client } from "@/sanity/lib/client";
import BlogCard from "./components/BlogCard";
import Link from "next/link";
import TagsForMobile from "./components/TagsForMobile";

// Define the types for your data
interface Post {
  title: string;
  summary: string;
  image: {
    asset: {
      url: string;
    };
  };
  slug: string;
  tags: {
    _id: string;
    slug: {
      current: string;
    };
    name: string;
  }[];
}

export default async function Home() {
  // Fetch data server-side
  const query = `*[_type == "post"] | order(_createdAt asc) {
    summary,
    title,
    image,
    "slug": slug.current,
    tags[]-> {
      _id,
      "slug": slug.current,
      name
    }
  }`;

  const posts: Post[] = await client.fetch(query);

  return (
    <main className="flex min-h-screen flex-col ">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post: Post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>
    </main>
  );
}

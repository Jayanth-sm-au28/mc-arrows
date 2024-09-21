'use client'
// /app/page.tsx
import { client } from "@/sanity/lib/client";
import BlogCard from "./components/BlogCard";
import Link from "next/link";

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
      {/* <div className="flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl">
          Welcome World
        </h1>
        <Link className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl" href="/tag">
          #tags
        </Link>
      </div> */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post: Post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>
    </main>
  );
}

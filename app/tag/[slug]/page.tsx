"use client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useParams } from "next/navigation"; // Use this to access dynamic route params
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image"; // Assuming you have a helper function for image URL
// import CardComponent from "@/app/components/CardComponent";

export default async function TagPage({ post }: { post: Post }) {
  const params = useParams();
  const { slug } = params; // Get the dynamic tag slug from URL

  // Query to fetch posts that reference the selected tag
  const query = `*[_type == "post" && "${slug}" in tags[]->slug.current] {
    title,
    summary,
    image,
    "slug": slug.current,
    tags[]-> {
      _id,
      "slug": slug.current,
      name
    }
  }`;

  const posts = await client.fetch(query);
  console.log("Filtered Posts by Tag:", posts);

  return (
    <main className="flex min-h-screen flex-col">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <div key={post.slug} className="bg-gray-100 p-4 rounded shadow-lg">
              {/* Display the title */}
              <h2 className="text-lg font-bold mb-2">{post.title}</h2>

              {/* Display the summary */}
              <p className="mb-4">{post.summary}</p>

              {/* Render the image if available */}
              {post.image && (
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={urlForImage(post.image)}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
              )}
              <Link
                href={`/blog/${post.slug}`}
                className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4"
              >
                Read More
              </Link>
              {/* Display tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags?.length > 0 ? (
                  post.tags.map((tag: any) => (
                    <Link
                      key={tag._id}
                      href={`/tag/${tag.slug}`}
                      className="text-blue-500 hover:underline"
                    >
                      #{tag.name}
                    </Link>
                  ))
                ) : (
                  <span>No tags available</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl font-semibold text-center">No posts found for this tag.</p>
        )}
      </section>
    </main>
  );
}

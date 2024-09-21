"use client"
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BlogCard({ post }: { post: Post }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/blog/${post.slug}`);
  };
  return (
    <section className="flex flex-col justify-between h-[480px] rounded-lg bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 bg-gray-100 group hover:scale-105 transition-transform ease-out duration-700 px-4"
    onClick={handleClick}>
      {/* Image Section*/}
      <div className="relative max-h-76 flex-1">
        <Image
          src={urlForImage(post.image)}
          alt="Any"
          fill
          className="object-cover rounded "
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gapx-y-4  p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight">
          {post.title}
        </h2>
        <br></br>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
          {post.summary}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4"
        >
          Read More
        </Link>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
          {post.tags && post.tags.length > 0 ? (
            post.tags.map(
              (tag: { name: string; slug: string; _id: string }) => (
                <span key={tag._id} className="mr-2">
                  #{tag.name}
                </span>
              )
            )
          ) : (
            <span>No tags</span>
          )}
        </p>
      </div>
    </section>
  );
}

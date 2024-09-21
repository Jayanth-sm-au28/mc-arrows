
// import { urlForImage } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React from "react";

// const CardComponent = ({ post }: any) => {
//   const router = useRouter();
//   const handleClick = () => {
//     router.push(`/blog/${post.slug}`);
//   };
//   console.log("post",post)
//   return (
//     <div
//       key={post.slug}
//       className="bg-gray-100 p-4 rounded shadow-lg"
//       onClick={handleClick}
//     >
//       {/* Display the title */}
//       <h2 className="text-lg font-bold mb-2">{post.title}</h2>

//       {/* Display the summary */}
//       <p className="mb-4">{post.summary}</p>

//       {/* Render the image if available */}
//       {post.image && (
//         <div className="relative w-full h-64 mb-4">
//           <Image
//             src={urlForImage(post.image)}
//             alt={post.title}
//             // layout="fill"
//             objectFit="cover"
//             height={80}
//             width={80}
//             className="rounded "
//           />
//         </div>
//       )}
//       <Link
//         href={`/blog/${post.slug}`}
//         className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4"
//       >
//         Read More
//       </Link>
//       {/* Display tags */}
//       <div className="flex flex-wrap gap-2">
//         {post.tags?.length > 0 ? (
//           post.tags.map((tag: any) => (
//             <Link
//               key={tag._id}
//               href={`/tag/${tag.slug}`}
//               className="text-blue-500 hover:underline"
//             >
//               #{tag.name}
//             </Link>
//           ))
//         ) : (
//           <span>No tags available</span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardComponent;

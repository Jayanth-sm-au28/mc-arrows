import { client } from '@/sanity/lib/client';
import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'
import { Tag } from '../utils/interface';

async function getAllTags() {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }
  `;
  const tags = client.fetch(query);
  return tags;
}

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Tags",
  // title: {
  //   absolute: "TAGS",
  // },
  description: "Search for posts by tags on the blog"
}

const LeftSideComponent = async() => {
  const tags: Tag[] = await getAllTags();

  return (
    <div className='bg-gray-50'>

        {tags?.length > 0 &&
          tags?.map((tag:any) => (

            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
            <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
                #{tag.name} ({tag?.postCount})
              </div>
            </Link>
          ))}
      </div>
  )
}

export default LeftSideComponent
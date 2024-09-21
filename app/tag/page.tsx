// import Header from "@/app/components/Header";
// import Navbar from "@/app/components/Navbar";
import { Tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

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

const page = async () => {
  const tags: Tag[] = await getAllTags();
  console.log(tags, "tags");
  return (
    <div>
      {/* <Header title="Tags" /> */}
      
    </div>
  );
};

export default page;

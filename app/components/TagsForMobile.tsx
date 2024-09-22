"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Tag } from "../utils/interface";

const TagsForMobile = ({ tags }: { tags: Tag[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 mt-9  fixed w-full z-40 sm:hidden">
      {/* Button to toggle the dropdown */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
        <span className="text-lg font-semibold">Tags</span>
        

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm bg-blue-700 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-all"
        >
          {isOpen ? "Hide Tags" : "Show Tags"}
        </button>
      </div>

      {/* Dropdown menu - visible only on small to medium screens */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          {tags?.length > 0 &&
            tags?.map((tag: Tag) => (
              <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-blue-700">
                  #{tag.name} ({tag?.postCount})
                </div>
              </Link>
            ))}
        </div>
      )}

     
    </div>
  );
};

export default TagsForMobile;

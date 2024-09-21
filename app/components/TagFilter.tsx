"use client"
import { useState } from 'react';

interface TagFilterProps {
  tags: string[];
  onTagClick: (tag: string) => void;
  selectedTags: string[];
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, onTagClick, selectedTags }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map(tag => (
        <button
          key={tag}
          className={`px-4 py-2 rounded ${selectedTags.includes(tag) ? 'bg-accentDarkSecondary text-dark' : 'bg-gray-200'}`}
          onClick={() => onTagClick(tag)}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;

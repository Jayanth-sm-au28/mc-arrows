import { client } from "@/sanity/lib/client";
import TagsForMobile from "./TagsForMobile";
import { Tag } from "../utils/interface";

// Fetch all tags with post count
async function getAllTags() {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }
  `;
  const tags: Tag[] = await client.fetch(query);
  return tags;
}

const TopTagComponent = async () => {
  const tags = await getAllTags();

  return (
    <div>
      <TagsForMobile tags={tags} />
    </div>
  );
};

export default TopTagComponent;

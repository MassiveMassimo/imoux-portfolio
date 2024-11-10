import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Post from "./components/Post";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage(
  props: Readonly<{
    params: Promise<{ slug: string }>;
  }>,
) {
  const params = await props.params;
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return <Post post={post} postImageUrl={postImageUrl} />;
}

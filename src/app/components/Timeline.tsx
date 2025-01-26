import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { type SanityDocument } from "next-sanity";
import { Link } from "next-view-transitions";
import Image from "next/image";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image
}`;

// const options = { next: { revalidate: 30 } };

// const { projectId, dataset } = client.config();
// const urlFor = (source: SanityImageSource) =>
//   projectId && dataset
//     ? imageUrlBuilder({ projectId, dataset }).image(source)
//     : null;

export default async function Timeline() {
  // const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <section className="flex h-[50svh] w-full max-w-none! flex-col items-stretch bg-linear-to-b from-slate-200 dark:from-slate-950">
      <div className="h-10 rounded-b-full bg-white dark:bg-slate-900" />
      <div className="grow flex flex-col items-stretch justify-center p-20">

      </div>
      {/* <ul className="flex flex-col gap-4 px-20">
        {posts.map((post) => {
          // Process the image URL
          const imageUrl = post.image
            ? urlFor(post.image)?.width(550).height(310).url()
            : null;

          return (
            <li className="hover:underline" key={post._id}>
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={post.title}
                  className="aspect-video rounded-xl"
                  width={550}
                  height={310}
                  style={{ viewTransitionName: `image-${post._id}` }}
                />
              )}
              <Link href={`/${post.slug.current}`}>
                <h2
                  className="text-xl font-semibold"
                  style={{ viewTransitionName: `title-${post._id}` }}
                >
                  {post.title}
                </h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          );
        })}
      </ul> */}
    </section>
  );
}

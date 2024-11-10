"use client";

import type { SanityDocument } from "next-sanity";

import { PortableText } from "next-sanity";
import { Link, useTransitionRouter } from "next-view-transitions";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Post({
  post,
  postImageUrl,
}: Readonly<{
  post: SanityDocument;
  postImageUrl: string | null | undefined;
}>) {
  const router = useTransitionRouter();

  return (
    <main className="container flex min-h-screen max-w-3xl flex-col gap-4 p-8 py-40">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
          style={{ viewTransitionName: `image-${post._id}` }}
        />
      )}
      <h1
        className="mb-8 text-4xl font-bold"
        style={{ viewTransitionName: `title-${post._id}` }}
      >
        {post.title}
      </h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
      <p>boobs</p>
    </main>
  );
}

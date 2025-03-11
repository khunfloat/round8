import { client } from "@/sanity/lib/client";
import {
  PLAYLIST_BY_SLUG_QUERY,
  STARTUP_BY_ID_QUERY,
} from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import ProductCard, { StartupTypeCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import markdownit from "markdown-it";

const md = markdownit();

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [post, { select: editorPosts }] = await Promise.all([
    client.fetch(STARTUP_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "editor-picks",
    }),
  ]);

  if (!post) return notFound();

  return (
    <>
      <section className="section_container -mt-4">
        <img
          src={post.image}
          alt="thumbnail"
          className="rounded-2xl w-full md:h-[450px] object-cover h-[300px]"
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <h1 className="text-30-bold">{post.title}</h1>
            <p className="category-tag">{post.category}</p>
          </div>

          <div className="flex-between gap-5">
            <p className="text-xl">Product Details</p>
            <p className="text-xl">${post.price}</p>
          </div>
          {post.description ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}

          <Link
            href={`/user/${post.author?._id}`}
            className="flex gap-2 items-center mb-3"
          >
            <Image
              src={post.author.image}
              alt="avatar"
              width={50}
              height={64}
              className="rounded-full drop-shadow-lg"
            />

            <div>
              <p className="text-20-medium">{post.author.name}</p>
              <p className="text-16-medium !text-black-300">
                @{post.author.username}
              </p>
            </div>
          </Link>
        </div>

        <hr className="divider" />

        {editorPosts?.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-30-semibold">Most Picks</p>

            <ul className="mt-7 card_grid-sm">
              {editorPosts.map((post: StartupTypeCard, i: number) => (
                <ProductCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )}

        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default Page;

import { type Metadata } from 'next';

import { format, parseISO } from 'date-fns';

import PostTag from '@/components/post-tag';

import { env } from '@/libs/env.mjs';

import { type Post, type ResponseStruct } from '@/types';

import Back from './back';
import PostViewer from './post-viewer';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const res = await fetch(`${env.BASE_URL}/posts/${params.slug}`, {
    cache: 'no-cache',
  });
  const data = (await res.json()) as ResponseStruct<Post>;

  const post = data.data;

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} · Blog`,
    description: post.desc,
    keywords: post?.tags?.map((el) => el.name).join(','),
  };
}

export default async function Page({
  params,
}: {
  params: { readonly slug: string };
}) {
  const res = await fetch(`${env.BASE_URL}/posts/${params.slug}`, {
    cache: 'no-cache',
  });
  const data = (await res.json()) as ResponseStruct<Post>;

  const post = data.data;

  if (!post?.id) {
    return <>404</>;
  }

  return (
    <div className="flex flex-col">
      <article className="prose prose-slate w-full dark:prose-invert">
        {post.cover && (
          <img
            src={post.cover}
            alt={post.title}
            className="max-w-[65ch] h-auto mb-16"
          />
        )}
        <h1 className="mb-4 text-4xl font-extrabold text-white ">
          {post.title}
        </h1>
        <div className="text-white text-sm flex flex-row items-center">
          <div>{post.author}</div>
          <span className="mx-2">·</span>
          <span className="text-slate-400">
            {format(parseISO(post.createdAt), 'MMMM dd, yyyy')}
          </span>
        </div>
        <PostViewer body={post.body || ''} />
      </article>

      <div className="flex flex-row">
        {post.tags?.map((el) => <PostTag key={el.id} tag={el} />)}
      </div>
      <Back />
    </div>
  );
}

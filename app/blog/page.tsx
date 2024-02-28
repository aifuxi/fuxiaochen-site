import React from 'react';

import { type Metadata } from 'next';
import Link from 'next/link';

import { format, parseISO } from 'date-fns';

import { env } from '@/libs/env.mjs';

import { type Post, type ResponseTotalStruct } from '@/types';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Page() {
  const res = await fetch(`${env.BASE_URL}/posts`);
  const data = (await res.json()) as ResponseTotalStruct<Post[]>;

  const posts = data.data || [];

  return (
    <section className="max-w-screen-md w-full">
      <div className="flex flex-col justify-center gap-5">
        <p className="text-4xl md:text-5xl leading-[1.125] font-bold tracking-tight">
          Blog
        </p>
        <div className="gap-4 flex flex-col">
          {posts.map((el) => (
            <Link key={el.id} href={`/blog/${el.slug}`}>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 text-slate-50 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {el.title}
                  </h3>
                  <p className="text-sm text-slate-400">{el.desc}</p>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <span className="text-sm text-slate-350">
                    {el.author}&nbsp;·&nbsp;
                    {format(parseISO(el.createdAt), 'MMMM dd, yyyy')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

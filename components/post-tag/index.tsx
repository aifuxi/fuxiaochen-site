import Image from 'next/image';

import { type Tag } from '@/types';

export default function PostTag({ tag }: { tag: Tag }) {
  return (
    <div className="flex flex-row items-center gap-1 py-1 px-4 rounded-full text-md bg-zinc-900 text-zinc-200 ring-1 ring-zinc-800 ">
      {tag.icon && (
        <Image src={tag.icon} width={16} height={16} alt={tag.name} />
      )}
      {tag.name}
    </div>
  );
}

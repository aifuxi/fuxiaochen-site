'use client';

import { BytemdViewer } from '@/components/bytemd';

export default function PostViewer({ body }: { body: string }) {
  return <BytemdViewer value={body} />;
}

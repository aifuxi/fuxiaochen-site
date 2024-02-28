'use client';

import { useRouter } from 'next/navigation';

export default function Back() {
  const router = useRouter();

  return (
    <div
      className="text-white font-bold text-2xl pt-8 pb-4 flex items-end cursor-pointer"
      onClick={handleBack}
    >
      <div>$ cd ..</div>
      <div className="animate-cursor-blink border-b-4 border-white w-4 ml-2 mb-1.5"></div>
    </div>
  );

  function handleBack() {
    router.back();
  }
}

import Link from 'next/link';

import {
  SolarArrowRightBoldDuotone,
  SolarBook2BoldDuotone,
  SolarLetterBoldDuotone,
} from '@/components/icons';

import { EMAIL, NICKNAME } from '@/constants/info';

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-48 pb-64">
      <div className="max-w-screen-md flex flex-col gap-y-6">
        <p className="text-4xl md:text-6xl leading-[1.125] font-bold text-center tracking-normal flex">
          Hi~ 我是
          <p
            style={{
              background:
                'linear-gradient(to right, rgb(191, 228, 255), rgb(139, 117, 226)) text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {NICKNAME}
          </p>
          👋
        </p>
        <div className="text-xl md:text-2xl text-zinc-300/90 mb-5 flex flex-col gap-2">
          <p>欢迎来到我的个人网站！</p>
          <p>
            我在这里写 Blog 记录和分享我的成长，希望我的 Blog
            能为你提供有价值的信息，帮助你解决技术问题，或者给你带来一些灵感。
          </p>
          <p>
            如果你有任何问题、建议或想法，欢迎发邮件联系我，我看到后会尽快回复
            😘。
          </p>
        </div>
        <div className="flex gap-x-8">
          <Link
            href="/blog"
            className="inline-flex flex-row justify-center items-center  text-lg  text-slate-50 text-center px-5 rounded-full font-medium transition py-3"
            style={{
              background:
                'linear-gradient(45deg, rgb(36, 91, 202), rgb(111, 68, 191))',
            }}
          >
            <SolarBook2BoldDuotone className="text-lg mr-2" />
            看看 Blog
          </Link>
          <Link
            href={`mailto:${EMAIL}`}
            className="inline-flex flex-row justify-center items-center  text-lg  text-slate-50 text-center px-5 rounded-full font-medium transition py-3 bg-zinc-900  ring-1 ring-zinc-800 "
          >
            <SolarLetterBoldDuotone className="text-lg mr-2" />
            发邮件给这小子
          </Link>
          <Link
            className="inline-flex flex-row gap-2 justify-center items-center text-lg font-medium text-slate-200 text-center px-5 rounded-full transition py-3 hover:text-white"
            href="/about"
          >
            <span>关于</span>
            <SolarArrowRightBoldDuotone className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
}

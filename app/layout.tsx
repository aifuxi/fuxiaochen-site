import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { SolarLetterBoldDuotone, UimGithubAlt } from '@/components/icons';

import { EMAIL, GITHUB_PAGE, NICKNAME, SLOGAN } from '@/constants/info';

import 'bytemd/dist/index.css';

import '@/styles/global.css';

export const metadata: Metadata = {
  title: {
    template: `%s · ${NICKNAME}`,
    default: `${NICKNAME}`,
  },
  description: `${SLOGAN}`,
  keywords: NICKNAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark" style={{ colorScheme: 'dark' }}>
      <link rel="icon" type="image/svg+xml" href="/fuxiaochen.svg" />
      <body className="antialiased selection:bg-[#8b75e2]/30 w-full h-full bg-black text-slate-50">
        <nav className="sticky inset-x-0 top-0 h-14 backdrop-blur z-20 transition-[background-color,border-width] border-b-zinc-900 flex flex-col justify-center w-full items-center bg-transparent border-b">
          <div className="flex flex-row justify-between gap-8 w-full px-6 sm:px-8 md:px-16 py-2 max-w-screen-xl">
            <div className="flex flex-row gap-3 items-center">
              <Link
                href="/"
                className="flex flex-row gap-3 items-center text-md font-semibold"
              >
                <Image
                  src="/fuxiaochen.svg"
                  height={24}
                  width={24}
                  className="inline-block border border-slate-800 rounded-md"
                  alt={NICKNAME}
                />
                {NICKNAME}
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <div className="hidden sm:flex flex-row gap-8 items-center mr-8">
                <Link
                  className="text-md font-medium text-slate-300 hover:text-slate-50 transition-colors py-1 sm:py-0"
                  href="/"
                >
                  首页
                </Link>
                <Link
                  className="text-md font-medium text-slate-300 hover:text-slate-50 transition-colors py-1 sm:py-0"
                  href="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="text-md font-medium text-slate-300 hover:text-slate-50 transition-colors py-1 sm:py-0"
                  href="/about"
                >
                  关于
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="flex flex-col items-center justify-center gap-2 px-4 text-slate-400 py-9">
          <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
            <Link
              className="hover:text-slate-50 transition-colors"
              href={GITHUB_PAGE}
              target="_blank"
            >
              <UimGithubAlt className="text-2xl" />
            </Link>
            <Link
              className="hover:text-slate-50 transition-colors"
              href={`mailto:${EMAIL}`}
            >
              <SolarLetterBoldDuotone className="text-2xl" />
            </Link>
          </div>
          <p>
            © {new Date().getFullYear()} • {NICKNAME}
          </p>
        </footer>
      </body>
    </html>
  );
}

import React from 'react';

import Image from 'next/image';

import {
  SkillIconsGolang,
  SkillIconsNextjsDark,
  SkillIconsReactDark,
  SkillIconsTailwindcssDark,
  SkillIconsTypescript,
} from '@/components/icons';

import { NICKNAME } from '@/constants/info';

const skills: Array<{ icon: React.ReactNode; name: string }> = [
  {
    name: 'Tailwind CSS',
    icon: <SkillIconsTailwindcssDark className="w-4 h-4 mr-1" />,
  },
  {
    name: 'React',
    icon: <SkillIconsReactDark className="w-4 h-4 mr-1" />,
  },
  {
    name: 'TypeScript',
    icon: <SkillIconsTypescript className="w-4 h-4 mr-1" />,
  },
  {
    name: 'Next.js',
    icon: <SkillIconsNextjsDark className="w-4 h-4 mr-1" />,
  },
  {
    name: 'Golang',
    icon: <SkillIconsGolang className="w-4 h-4 mr-1" />,
  },
];

export default function Page() {
  return (
    <div className="prose prose-slate w-full dark:prose-invert">
      <Image
        src="/aifuxi.webp"
        alt={NICKNAME}
        width={128}
        height={128}
        className="mx-auto rounded-full"
      />

      <h3>昵称</h3>
      <p>{NICKNAME}</p>

      <h3>坐标</h3>
      <p>魔都</p>

      <h3>练习时长</h3>
      <p>20年毕业至今</p>

      <h3>技术栈</h3>
      <div className="flex gap-4 flex-wrap">
        {skills.map((el) => (
          <div
            key={el.name}
            className="flex flex-row items-center gap-1 py-1 px-4 rounded-full text-md bg-zinc-900 text-zinc-200 ring-1 ring-zinc-800 "
          >
            {el.icon}
            {el.name}
          </div>
        ))}
      </div>

      <h3>联系</h3>
      <p>请点击网站底部的 Github 或者 Email</p>
    </div>
  );
}

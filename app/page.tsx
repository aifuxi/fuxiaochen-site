import { NICKNAME } from '@/constants/info';

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-48">
      <div className="max-w-screen-md">
        <p className="text-4xl md:text-6xl leading-[1.125] font-bold text-center tracking-normal">
          Hi~ 我是{NICKNAME} 👋
        </p>
      </div>
    </div>
  );
}

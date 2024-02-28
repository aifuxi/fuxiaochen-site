import { type Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    keyframes: {
      'cursor-blink': {
        '50%': { borderColor: 'transparent' },
      },
    },
    animation: {
      // 光标闪烁动画
      'cursor-blink': 'cursor-blink 0.6s step-end infinite alternate',
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;

import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F2EAE2',
        'blue-gray': '#6C7289',
        'blue-black': '#1C232B',
        'aquamarine-light': '#3D8168',
        'aquamarine-dark': '#1A4032',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};

export default config;

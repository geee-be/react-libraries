import { twui } from './src/tw-plugin/plugin.ts';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/preview.{js,ts,jsx,tsx,mdx}',
  ],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  plugins: [
    twui({
      darkMode: 'data-theme',
    }),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
};

export default config;

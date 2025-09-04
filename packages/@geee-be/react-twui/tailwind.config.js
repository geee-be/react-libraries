
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './css/*.{css}',
    './src/**/*.{css}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/preview.{js,ts,jsx,tsx,mdx}',
  ],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  theme: {
    extend: {
      colors: {},
    },
  },
};

export default config;

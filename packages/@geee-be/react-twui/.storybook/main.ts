const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    // '@chromatic-com/storybook',
    'storybook-dark-mode',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  features: {},

  docs: {
    defaultName: 'Documentation',
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;

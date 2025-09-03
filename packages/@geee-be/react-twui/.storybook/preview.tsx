import type { Preview } from '@storybook/react-vite';
import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import '../css/twui.css';

const preview: Preview = {
  decorators: [
    (Story) => {
      const darkMode = useDarkMode();
      useEffect(() => {
        const html = document.getElementsByTagName('html')[0];
        html.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        html.setAttribute(
          'style',
          `color-scheme: ${darkMode ? 'dark' : 'light'}`,
        );
      }, [darkMode]);
      return (
        <div className={'m-0 flex-1'}>
          <div className={'m-4'}>{Story()}</div>
        </div>
      );
    },
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
    docs: {
      source: {
        excludeDecorators: true,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    darkMode: {
      classTarget: 'xx',
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
    },
  },
};

export default preview;

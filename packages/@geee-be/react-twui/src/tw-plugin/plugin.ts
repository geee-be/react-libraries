/**
 * This Tailwind plugin is based and inspired on "tw-colors" and "NextUI".
 *
 * @see https://github.com/L-Blondy/tw-colors
 * @see https://github.com/nextui-org/nextui
 */

import deepMerge from 'deepmerge';
import plugin from 'tailwindcss/plugin.js';

import type { ThemableColors } from './colors/themable-colors.js';
import { themableColors } from './colors/themable-colors.js';
import { resolveConfig } from './utils/resolve-config.js';
import type { DarkMode, TwuiOptions } from './utils/types.js';

/**
 * The core plugin function.
 */
const corePlugin = (
  theme: ThemableColors,
  darkMode: DarkMode,
  fontSmooth: TwuiOptions['fontSmooth'],
): ReturnType<typeof plugin> => {
  const resolved = resolveConfig(theme, darkMode);

  return plugin(
    ({ addBase, addComponents, addUtilities, addVariant, e, config }) => {
      addBase([
        {
          ':root': {
            '--font-smooth--webkit':
              fontSmooth === 'antialiased' ? 'antialiased' : 'unset',
            '--font-smooth--moz':
              fontSmooth === 'antialiased' ? 'grayscale' : 'unset',
          },

          'html, body': {
            color: 'hsl(var(--color-foreground))',
            backgroundColor: 'hsl(var(--color-background))',
          },

          '::-webkit-calendar-picker-indicator:focus': {
            color: 'hsl(var(--color-primary))',
            backgroundColor: 'hsl(var(--color-primary) / 0.3)',
            outlineColor: 'hsl(var(--color-primary))',
            outlineOffset: '2px',
            outlineWidth: '2px',
            borderRadius: '0.5rem',
          },
        },
      ]);

      addUtilities([
        {
          '.antialiased': {
            '-webkit-font-smoothing': 'var(--font-smooth--webkit)',
            '-moz-osx-font-smoothing': 'var(--font-smooth--moz)',
          },
          '.font-inherit': {
            fontWeight: 'inherit',
            fontFamily: 'inherit',
          },
        },
      ]);

      addUtilities(resolved.utilities);
      addComponents(resolved.components);
    },

    // Extend the Tailwind config
    {
      // darkMode: [
      //   'variant',
      //   [
      //     '@media (prefers-color-scheme: dark)',
      //     '.dark&',
      //     ':is(.dark > &:not([data-theme]))',
      //     ':is(.dark &:not(.dark [data-theme]:not(.dark) * ))',
      //     ':is(.dark:not(:has([data-theme])) &:not([data-theme]))', // See the browser support: https://caniuse.com/css-has
      //     `[data-theme='dark']&`,
      //     `:is([data-theme='dark'] > &:not([data-theme]))`,
      //     `:is([data-theme='dark'] &:not([data-theme='dark'] [data-theme]:not([data-theme='dark']) * ))`,
      //     `:is([data-theme='dark']:not(:has([data-theme])) &:not([data-theme]))`, // See the browser support: https://caniuse.com/css-has
      //   ],
      // ],
      darkMode:
        darkMode === 'data-theme' ? ['class', '[data-theme="dark"]'] : 'media',
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
      theme: {
        extend: {
          colors: {
            ...{},
            ...resolved.colors,
          },
          keyframes: {
            'caret-blink': {
              '0%,70%,100%': { opacity: '1' },
              '20%,50%': { opacity: '0' },
            },
            'accordion-down': {
              from: { height: '0' },
              to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: '0' },
            },
          },
          animation: {
            'caret-blink': 'caret-blink 1.25s ease-out infinite',
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
          },
        },
      },
    },
  );
};

/**
 * The actual plugin function.
 */
export const twui = (config: TwuiOptions = {}): ReturnType<typeof plugin> => {
  const { darkMode, fontSmooth = 'antialiased', theme: userTheme } = config;

  const theme =
    userTheme && typeof userTheme === 'object'
      ? deepMerge(themableColors, userTheme)
      : themableColors;
  const tw = corePlugin(theme, darkMode, fontSmooth);
  return tw;
};

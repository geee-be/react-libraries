/**
 * This Tailwind plugin is based and inspired on "tw-colors" and "NextUI".
 *
 * @see https://github.com/L-Blondy/tw-colors
 * @see https://github.com/nextui-org/nextui
 */

import Color from 'color';

import omit from 'lodash.omit';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';
import type { ThemableColors } from '../colors/themable-colors.js';
import { getColorString } from './color.js';
import { flattenThemeObject } from './object.js';
import type { DarkMode } from './types.js';

interface ResolvedConfig {
  variants: { name: string; definition: string[] }[];
  utilities: CSSRuleObject;
  components: CSSRuleObject;
  colors: Record<
    string,
    ({
      opacityValue,
      opacityVariable,
    }: { opacityValue: string; opacityVariable: string }) => string
  >;
}

interface Hsl {
  h: number;
  s: number;
  l: number;
}

interface Hsla extends Hsl {
  alpha?: number;
}

const parseColorValue = (
  value: string | [string, string],
): [Hsla, Hsla] | [undefined, undefined] => {
  if (!value) return [undefined, undefined];

  const tuple: [string, string] =
    typeof value === 'string' ? [value, value] : value;
  return tuple.map((v) => {
    const [h, s, l, alpha = 1] = Color(v).hsl().round().array();
    return { h, s, l, alpha };
  }) as [Hsla, Hsla];
};

const fgColor = (hsl: Hsl): Hsl => {
  const color = Color(hsl);
  const [h, s, l] = color
    .lightness(color.isDark() ? 90 : 10)
    .hsl()
    .round()
    .array();
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  return { h: h!, s: s!, l: l! };
};

export const resolveConfig = (
  colors: ThemableColors,
  darkMode: DarkMode,
): ResolvedConfig => {
  const resolved: ResolvedConfig = {
    variants: [],
    components: {},
    utilities: {},
    colors: {},
  };

  const lightVariables: Record<string, string> = {};
  const darkVariables: Record<string, string> = {};

  const baseColors = omit(
    colors,
    'background',
    'foreground',
    'paper',
    'control',
    'surface',
    'destructive',
  );
  const flatColors = flattenThemeObject(colors);

  /* --------------------------------- Colors --------------------------------- */
  for (const colorName of Object.keys(flatColors)) {
    const colorValue = flatColors[colorName as keyof typeof flatColors] as
      | string
      | [string, string];

    if (!colorValue) {
      break;
    }

    try {
      // const [h, s, l, defaultAlphaValue = 1] = Color(colorValue).hsl().round().array(); // fallback defaultAlphaValue to 1 if undefined
      const [light, dark] = parseColorValue(colorValue);
      if (!light || !dark) break;

      const lightContent = fgColor(light);
      const darkContent = fgColor(dark);

      const colorVariable = `--color-${colorName}`;
      const opacityVariable = `--color-${colorName}-opacity`;

      // Set the css variable in "@layer utilities"
      lightVariables[colorVariable] = `${light.h} ${light.s}% ${light.l}%`;
      darkVariables[colorVariable] = `${dark.h} ${dark.s}% ${dark.l}%`;

      // Set the dynamic color in tailwind config theme.colors
      resolved.colors[colorName] = ({
        opacityVariable: twOpacityVariable,
        opacityValue: twOpacityValue,
      }) =>
        getColorString(
          colorVariable,
          opacityVariable,
          twOpacityValue,
          twOpacityVariable,
        );

      if (!colorName.endsWith('fg')) {
        const colorContentVariable = `--color-${colorName}-fg`;

        lightVariables[colorContentVariable] =
          `${lightContent.h} ${lightContent.s}% ${lightContent.l}%`;
        darkVariables[colorContentVariable] =
          `${darkContent.h} ${darkContent.s}% ${darkContent.l}%`;

        // If an alpha value was provided in the color definition, store it in a css variable
        if (typeof light.alpha === 'number') {
          lightVariables[opacityVariable] = light.alpha.toFixed(2);
        }
        if (typeof dark.alpha === 'number') {
          darkVariables[opacityVariable] = dark.alpha.toFixed(2);
        }

        // Set the dynamic color in tailwind config theme.colors
        resolved.colors[`${colorName}-fg`] = ({
          opacityVariable: twOpacityVariable,
          opacityValue: twOpacityValue,
        }) =>
          getColorString(
            colorContentVariable,
            opacityVariable,
            twOpacityValue,
            twOpacityVariable,
          );
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.warn('tw-plugin-build-error:', error.message);
      } else {
        console.warn('tw-plugin-build-error:', error);
      }
    }
  }

  resolved.components[':root'] = {
    ...(resolved.components[':root'] as object),
    ...lightVariables,
  };
  if (darkMode === 'data-theme') {
    resolved.components["[data-theme='dark']"] = darkVariables;
  } else {
    resolved.components['@media (prefers-color-scheme: dark)'] = {
      ':root': darkVariables,
    };
  }

  for (const [colorName, definitions] of Object.entries(baseColors)) {
    const flattened = flattenThemeObject(definitions);
    const overrideLightVariables: Record<string, string> = {};
    const overrideDarkVariables: Record<string, string> = {};
    for (const [colorVariant, colorValue] of Object.entries(flattened)) {
      try {
        const [light, dark] = parseColorValue(colorValue);
        if (!light || !dark) break;

        const lightContent = fgColor(light);
        const darkContent = fgColor(dark);

        const colorVariable = `--color-default${
          colorVariant !== 'DEFAULT' ? `-${colorVariant}` : ''
        }`;
        const opacityVariable = `--color-default${
          colorVariant !== 'DEFAULT' ? `-${colorVariant}` : ''
        }-opacity`;

        // Set the css variable in "@layer utilities"
        overrideLightVariables[colorVariable] =
          `${light.h} ${light.s}% ${light.l}%`;
        overrideDarkVariables[colorVariable] =
          `${dark.h} ${dark.s}% ${dark.l}%`;

        if (!colorVariant.endsWith('fg')) {
          const colorContentVariable = `--color-default${
            colorVariant !== 'DEFAULT' ? `-${colorVariant}` : ''
          }-fg`;

          overrideLightVariables[colorContentVariable] =
            `${lightContent.h} ${lightContent.s}% ${lightContent.l}%`;
          overrideDarkVariables[colorContentVariable] =
            `${darkContent.h} ${darkContent.s}% ${darkContent.l}%`;

          // If an alpha value was provided in the color definition, store it in a css variable
          if (typeof light.alpha === 'number') {
            overrideLightVariables[opacityVariable] = light.alpha.toFixed(2);
          }
          if (typeof dark.alpha === 'number') {
            overrideDarkVariables[opacityVariable] = dark.alpha.toFixed(2);
          }
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.warn('tw-plugin-build-error:', error.message);
        } else {
          console.warn('tw-plugin-build-error:', error);
        }
      }
    }

    resolved.utilities[`.default-${colorName}`] = overrideLightVariables;
    if (darkMode === 'data-theme') {
      resolved.utilities[`[data-theme='dark'] .default-${colorName}`] =
        overrideDarkVariables;
    } else {
      resolved.utilities['@media (prefers-color-scheme: dark)'] = Object.assign(
        { [`.default-${colorName}`]: overrideDarkVariables },
        resolved.utilities['@media (prefers-color-scheme: dark)'],
      );
    }
  }

  return resolved;
};

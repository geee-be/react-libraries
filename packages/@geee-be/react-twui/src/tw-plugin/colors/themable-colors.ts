import { defaultColors } from './default.js';
import { error } from './error.js';
import { info } from './info.js';
import { primary } from './primary.js';
import { secondary } from './secondary.js';
import { success } from './success.js';
import { warning } from './warning.js';

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

type ColorScale = {
  // default
  DEFAULT: string | [string, string];
  fg: string | [string, string];

  // muted
  muted: string | [string, string];
  'muted-fg': string | [string, string];
} & Record<string, string | [string, string]>;

type ControlColors = {
  focus: string | [string, string];
  DEFAULT: string | [string, string];
} & Record<string, string | [string, string]>;

export type ThemableColorScale = Partial<ColorScale> | string;

export type ThemableColors = {
  background: string | [string, string];
  foreground: string | [string, string];
  default: ThemableColorScale;
  gray: ThemableColorScale;
  primary: ThemableColorScale;
  secondary: ThemableColorScale;
  info: ThemableColorScale;
  warning: ThemableColorScale;
  success: ThemableColorScale;
  error: ThemableColorScale;
  paper: ThemableColorScale;
  control: ControlColors;
  menu: ThemableColorScale;
  skeleton: string | [string, string];
  surface: ThemableColorScale;
  destructive: ThemableColorScale;
};

/* -------------------------------------------------------------------------- */
export const themableColors: ThemableColors = {
  background: ['hsl(255 0% 92%)', 'hsl(255 0% 10%)'],
  foreground: ['hsl(255 0% 10%)', 'hsl(255 0% 92%)'],

  default: defaultColors,
  gray: defaultColors,
  primary,
  secondary,
  info,
  warning,
  success,
  error,

  paper: {
    DEFAULT: ['hsl(255, 0%, 98%)', 'hsl(255 0% 15%)'],
    nested: ['hsl(255, 0%, 90% / 0.35)', 'hsl(255 0% 10% / 0.35)'],
    border: ['hsl(255 0% 40% / 0.5)', 'hsl(255 0% 60% / 0.5)'],
    fg: ['hsl(255 0% 20%)', 'hsl(255 0% 87.5%)'],
  },
  control: {
    DEFAULT: ['hsl(255, 0%, 98%)', 'hsl(255 0% 15%)'],
    focus: '#EC740C',
  },
  menu: {
    DEFAULT: ['hsl(255, 0%, 98%)', 'hsl(255 0% 15%)'],
    border: ['hsl(255 0% 40% / 0.5)', 'hsl(255 0% 60% / 0.5)'],
    active: ['hsl(255, 0%, 88%)', 'hsl(255 0% 25%)'],
    hover: ['hsl(255, 0%, 93%)', 'hsl(255 0% 20%)'],
  },

  skeleton: ['hsl(255 0% 70%)', 'hsl(255 0% 30%)'],
  surface: error,

  destructive: error,
};

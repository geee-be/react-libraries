import { cn } from './utils.js';

interface PlaceholderSelector {
  placeholderSelector?: string;
}

interface InputLikeProps extends PlaceholderSelector {
  display?: string;
  focus?: boolean;
}

export namespace Style {
  export const inputLike = (props: InputLikeProps) =>
    cn(
      `antialiased ${
        props?.display ?? 'inline'
      } grow rounded-lg border px-4 py-2 text-sm leading-6 transition-colors duration-100`,
      // alignment
      'items-center justify-start text-left',
      // font
      'font-normal',
      // color
      inputColorStateNormal({
        placeholderSelector: props?.placeholderSelector,
      }),
      // focus
      (props?.focus ?? true) && focusRing({ trigger: 'focus' }),
      // no shadow
      'shadow-none hover:shadow-none focus:shadow-none',
    );

  export const inputColorStateNormal = (props?: PlaceholderSelector) =>
    `bg-control print:bg-none text-control-fg print:text-black border-default print:border-black/50 hover:border-default/70 ${
      props?.placeholderSelector ?? 'placeholder'
    }:text-control-fg/50 print:${
      props?.placeholderSelector ?? 'placeholder'
    }:text-transparent`;

  export const inputColorStateError = () =>
    'border-destructive hover:border-destructive print:border-destructive';

  export const inputColorStateDisabled = (props?: PlaceholderSelector) =>
    `bg-control print:bg-none text-control-fg/50 print:text-black/50 ${
      props?.placeholderSelector ?? 'placeholder'
    }:text-control-fg/50 print:${
      props?.placeholderSelector ?? 'placeholder'
    }:text-transparent border-default/50 print:border-black/50 hover:border-default/50 cursor-not-allowed`;

  export const focusRing = ({ trigger = 'focus' }) =>
    `outline-control-focus ${trigger}:outline ${trigger}:outline-2 ${trigger}:outline-offset-2`;
}

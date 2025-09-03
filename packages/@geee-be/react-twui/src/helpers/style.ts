import { cn } from './utils.js';

interface PlaceholderSelector {
  placeholderSelector?: string;
}

interface InputLikeProps extends PlaceholderSelector {
  display?: string;
  focus?:
    | boolean
    | 'focus'
    | 'focus-within'
    | 'focus-visible'
    | 'has-[input:focus]';
}

export namespace Style {
  export const inputLike = (props: InputLikeProps) =>
    cn(`like-input ${props?.display ?? 'inline'}`);

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

  export const focusRing = ({
    trigger = 'focus',
    type = 'outline',
  }: {
    trigger?: 'focus' | 'focus-within' | 'focus-visible' | 'has-[input:focus]';
    type?: 'outline' | 'ring';
  }) =>
    cn(
      type === 'outline' &&
        trigger === 'focus' &&
        'outline-control-focus focus:outline focus:outline-2 focus:outline-offset-2',
      type === 'outline' &&
        trigger === 'focus-within' &&
        'outline-control-focus focus-within:outline focus-within:outline-2 focus-within:outline-offset-2',
      type === 'outline' &&
        trigger === 'focus-visible' &&
        'outline-control-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      type === 'outline' &&
        trigger === 'has-[input:focus]' &&
        'outline-control-focus has-[input:focus]:outline has-[input:focus]:outline-2 has-[input:focus]:outline-offset-2',
      type === 'ring' &&
        trigger === 'focus' &&
        'outline-control-focus focus:outline focus:outline-2 focus:outline-offset-2',
      type === 'ring' &&
        trigger === 'focus-within' &&
        'outline-control-focus focus-within:outline focus-within:outline-2 focus-within:outline-offset-2',
      type === 'ring' &&
        trigger === 'focus-visible' &&
        'outline-control-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      type === 'ring' &&
        trigger === 'has-[input:focus]' &&
        'outline-control-focus has-[input:focus]:outline has-[input:focus]:outline-2 has-[input:focus]:outline-offset-2',
    );

  export const overlay = () => 'fixed inset-0 bg-black/50 dark:bg-black/80';
}

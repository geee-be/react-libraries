import { cva } from 'cva';
import { Style } from '../../helpers/style.js';

export const inputVariants = cva({
  base: Style.inputLike({ focus: 'focus-within' }),
  variants: {
    ariaInvalid: {
      true: Style.inputColorStateError(),
    },
    disabled: {
      true: Style.inputColorStateDisabled(),
    },
  },
});

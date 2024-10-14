import { cva } from 'cva';
import { Style } from '../../helpers/style.js';

export const inputVariants = cva({
  base: Style.inputLike({}),
  variants: {
    ariaInvalid: {
      true: Style.inputColorStateError(),
    },
    disabled: {
      true: Style.inputColorStateDisabled(),
    },
  },
});

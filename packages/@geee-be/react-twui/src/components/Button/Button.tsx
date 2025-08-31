import { createRipple } from '@geee-be/react-utils';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'cva';
import * as React from 'react';

import {
  cn,
  isElementWithChildren,
  isReactElement,
} from '../../helpers/utils.js';
import { buttonVariants, iconVariants } from './variants.js';

/* ---------------------------------- Types --------------------------------- */
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean;

    /**
     * The slot to be rendered before the label.
     */
    before?: React.ReactElement<HTMLElement>;

    /**
     * The slot to be rendered after the label.
     */
    after?: React.ReactElement<HTMLElement>;

    /**
     * Specifies whether this button has a destructive action.
     * If `true`, the button should be styled differently to indicate that it will perform a destructive action.
     */
    destructive?: boolean;
  };

export type ButtonElement = HTMLButtonElement;

const iconOnlyPadding = {
  md: 'p-8px',
  sm: 'p-6px',
};

export const Button = React.forwardRef<ButtonElement, ButtonProps>(
  (
    {
      after,
      asChild = false,
      before,
      children,
      className,
      destructive = false,
      disabled = false,
      shape = 'rounded',
      size = 'md',
      color = 'default',
      variant = 'solid',
      ...otherProps
    },
    ref,
  ) => {
    const useAsChild = asChild && isReactElement(children);
    const Component = useAsChild ? Slot : 'button';

    // Determine if the button is icon-only.
    const isIcon = React.useMemo(() => {
      return (
        (before && !after && !children && size) ??
        (after && !before && !children && size) ??
        shape === 'icon'
      );
    }, [before, after, children, size]);

    // Determine if the button is a 'link', 'outline', 'tertiary', or 'transparent' variant.
    const isVariantLinkOutlineTertiaryTransparent = React.useMemo(
      () => ['link', 'outline', 'tertiary', 'transparent'].includes(variant),
      [variant],
    );

    // Render an icon with size, variant, and destructive properties applied.
    const renderIcon = (
      icon: React.ReactElement<HTMLElement>,
    ): React.ReactNode => {
      const Component = React.isValidElement(icon) ? Slot : 'span';

      const isNonDestructiveIconOnly =
        variant &&
        isVariantLinkOutlineTertiaryTransparent &&
        isIcon &&
        !destructive;

      const iconClasses = cn(
        iconVariants({ size, destructive }),
        isNonDestructiveIconOnly && 'group-hover:opacity-70',
        destructive && 'opacity-100',
        icon.props?.className,
      );

      return <Component className={iconClasses}>{icon}</Component>;
    };

    const innerContent = useAsChild ? (
      React.cloneElement(children, {
        children: (
          <>
            {before ? renderIcon(before) : null}
            {isElementWithChildren(children) &&
              isIcon &&
              renderIcon(
                children.props.children as React.ReactElement<HTMLElement>,
              )}
            {isElementWithChildren(children) &&
              children.props.children}
            {after ? renderIcon(after) : null}
          </>
        ),
      } as Record<string, any>)
    ) : (
      <>
        {before ? renderIcon(before) : null}
        {React.isValidElement(children) &&
          isIcon &&
          renderIcon(children as React.ReactElement<HTMLElement>)}
        {children}
        {after ? renderIcon(after) : null}
      </>
    );

    return (
      <Component
        // data-component="Button"
        ref={ref}
        className={cn(
          'Button-root',
          buttonVariants({ size, color, variant, shape, destructive }),
          variant === 'link' && children && 'focus-visible:outline-0',
          isIcon && iconOnlyPadding[size],
          className,
        )}
        disabled={disabled}
        {...otherProps}
        onClick={(e) => {
          if (!['link', 'input'].includes(variant)) { createRipple(e);}
          otherProps.onClick?.(
            e as React.MouseEvent<HTMLButtonElement, MouseEvent>,
          );
        }}
      >
        {innerContent}
      </Component>
    );
  },
);

Button.displayName = 'Button';

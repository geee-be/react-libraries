import * as React from 'react';
import type { IconProps } from './types.js';

export const TippyIcon = React.forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { size = 24, title, ...rest } = props;
    const titleId = title
      ? `twui-${Date.now()}-${Math.floor(Math.random() * 10000)}`
      : undefined;

    return (
      <svg
        ref={ref}
        aria-labelledby={titleId}
        aria-hidden="true"
        fill="currentColor"
        height="8"
        width={size}
        {...rest}
        viewBox="0 0 24 8"
      >
        <title id={titleId}>{title ?? 'Pointer'}</title>
        <path d="M0.832284 0H23.379C19.1366 0 14.8943 4.53165 13.055 6.77361C12.5938 7.33581 11.6697 7.30068 11.2421 6.71249C9.59782 4.45039 5.73929 0 0.832284 0Z" />
      </svg>
    );
  },
);

TippyIcon.displayName = 'TippyIcon';

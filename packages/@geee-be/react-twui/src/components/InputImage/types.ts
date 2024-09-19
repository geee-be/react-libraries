import type { AspectRatio, Size } from 'react-advanced-cropper';

export type ImageSpec =
  | {
      aspectRatio: AspectRatio;
      maxWidth: number;
      maxHeight?: number;
      minWidth?: number;
      minHeight?: number;
    }
  | {
      aspectRatio: AspectRatio;
      maxWidth?: number;
      maxHeight: number;
      minWidth?: number;
      minHeight?: number;
    }
  | Size;

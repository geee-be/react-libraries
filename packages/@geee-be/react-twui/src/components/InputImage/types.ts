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

export type ValueType = 'blob' | 'buffer' | 'base64';

export type ImageBinary<T> = {
  mimeType: string;
  data: T;
};

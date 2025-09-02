import type { Size } from 'advanced-cropper';
import type { ImageBinary, ImageSpec, ValueType } from './types';

// Function to export the canvas with a different size
export const exportImage = async (
  source: HTMLCanvasElement,
  size: Size,
  contentType = 'image/webp',
): Promise<Blob> => {
  if (source.width === size.width && source.height === size.height) {
    // Export the image as a blob promise
    return getBlob(source, contentType);
  }

  const sourceBlob = await getBlob(source, 'image/webp', 0.95);
  const sourceImage = await blobToImage(sourceBlob);

  // Create a new canvas with the desired dimensions
  const target = document.createElement('canvas');
  target.width = size.width;
  target.height = size.height;

  const ctx = target.getContext('2d');
  if (!ctx) throw new Error('Could not get 2d context');

  ctx.imageSmoothingEnabled = true; // Enable or disable image smoothing (interpolation)
  ctx.imageSmoothingQuality = 'high'; // Possible values: 'low', 'medium', 'high'

  // Scale the original canvas content to fit the new canvas size
  ctx.drawImage(sourceImage, 0, 0, size.width, size.height);

  // Export the image as a blob promise
  return getBlob(target, contentType);
};

const getBlob = (
  canvas: HTMLCanvasElement,
  contentType = 'image/png',
  quality?: number,
) =>
  new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) return reject(new Error('Could not export image'));
        resolve(blob);
      },
      contentType,
      quality,
    );
  });

const blobToImage = (blob: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.src = url;
  });
};

const computeScale = (originalSize: Size, imageSpec: ImageSpec): number => {
  if ('aspectRatio' in imageSpec) {
    const maxWidth = imageSpec.maxWidth ?? Number.POSITIVE_INFINITY;
    const maxHeight = imageSpec.maxHeight ?? Number.POSITIVE_INFINITY;
    const minWidth = imageSpec.minWidth ?? 1;
    const minHeight = imageSpec.minHeight ?? 1;

    if (originalSize.width > maxWidth || originalSize.height > maxHeight) {
      // scale original size to fit the new size
      return Math.min(
        maxWidth / originalSize.width,
        maxHeight / originalSize.height,
      );
    }

    if (originalSize.width < minWidth || originalSize.height < minHeight) {
      // scale original size to fit the new size
      return Math.max(
        minWidth / originalSize.width,
        minHeight / originalSize.height,
      );
    }

    return 1;
  }

  const width = imageSpec.width;
  const height = imageSpec.height;

  // scale original size to fit the new size
  return Math.min(width / originalSize.width, height / originalSize.height);
};

export const finalSize = (originalSize: Size, imageSpec: ImageSpec): Size => {
  const scale = computeScale(originalSize, imageSpec);
  if (scale === 1) return originalSize;

  const scaledWidth = originalSize.width * scale;
  const scaledHeight = originalSize.height * scale;
  return { width: scaledWidth, height: scaledHeight };
};

export const fromValue = (
  value: ImageBinary<string | ArrayBuffer | Buffer> | Blob,
): Blob | undefined => {
  if (!value) return undefined;
  if ('data' in value) {
    if (value.data instanceof ArrayBuffer)
      return new Blob([value.data], { type: value.contentType });
    if (value.data instanceof Buffer)
      return new Blob([new Uint8Array(value.data)], {
        type: value.contentType,
      });
    if (typeof value.data === 'string')
      return new Blob([Buffer.from(value.data, 'base64')], {
        type: value.contentType,
      });
  }
  if (value instanceof Blob) return value;
  throw new Error('Invalid value');
};

export const toValue = async (
  blob: Blob,
  type?: ValueType,
): Promise<ImageBinary<Buffer | string> | Blob> => {
  switch (type) {
    case 'buffer':
      return {
        data: Buffer.from(await blob.arrayBuffer()),
        contentType: blob.type,
      };
    case 'base64':
      return {
        data: Buffer.from(await blob.arrayBuffer()).toString('base64'),
        contentType: blob.type,
      };
    default:
      return Promise.resolve(blob);
  }
};

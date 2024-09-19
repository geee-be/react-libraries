import type { Size } from 'advanced-cropper';

// Function to export the canvas with a different size
export const exportImage = async (
  source: HTMLCanvasElement,
  size: Size,
  mimeType = 'image/webp',
): Promise<Blob> => {
  if (source.width === size.width && source.height === size.height) {
    // Export the image as a blob promise
    return getBlob(source, mimeType);
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
  return getBlob(target, mimeType);
};

const getBlob = (
  canvas: HTMLCanvasElement,
  mimeType = 'image/png',
  quality?: number,
) =>
  new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) return reject(new Error('Could not export image'));
        resolve(blob);
      },
      mimeType,
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

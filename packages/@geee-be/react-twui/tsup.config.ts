import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  // Convert format to string
  const formatString = Array.isArray(options.format)
    ? options.format.join('-')
    : (options.format ?? 'esm');

  return {
    entry: [
      'src/**/*.ts',
      'src/**/*.tsx',
      '!src/**/*.stories.*',
      '!src/**/*.test.*',
    ],
    name: 'react-twui',
    tsconfig: `tsconfig-${formatString ?? 'esm'}.json`,
    bundle: false,
    clean: true,
    dts: false,
    format: options.format ?? ['esm'],
    minify: false,
    target: 'es2022',
    silent: true,
    sourcemap: true,
    splitting: false,
    metafile: true,
    treeshake: false,
    outDir: `dist/${formatString ?? 'esm'}`,
  };
});

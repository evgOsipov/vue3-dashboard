import { ViteConfigPaths } from './interfaces/ViteConfig';

export const buildViteResolve = (paths: ViteConfigPaths) => {
  return {
    alias: {
      '@': paths.src,
    },
  };
};

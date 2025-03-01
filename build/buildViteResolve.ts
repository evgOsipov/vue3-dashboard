import { ViteConfigPaths } from './interfaces/viteConfig';

export const buildViteResolve = (paths: ViteConfigPaths) => {
  return {
    alias: {
      '@': paths.srcPath,
    },
  };
};

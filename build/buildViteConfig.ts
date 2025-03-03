import { loadEnv } from 'vite';

import { buildVitePlugins } from './buildVitePlugins';
import { buildDevServer } from './buildDevServer';
import { buildViteResolve } from './buildViteResolve';
import { ViteConfigOptions } from './interfaces/viteConfig';

export const buildViteConfig = (options: ViteConfigOptions) => {
  const env = loadEnv(options.mode, process.cwd(), '');

  console.log(`App started at port ${env.PORT}`);

  return {
    plugins: buildVitePlugins(),
    server: buildDevServer(env.PORT),
    resolve: buildViteResolve(options.paths),
  }
};
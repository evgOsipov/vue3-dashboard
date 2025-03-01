import path from 'node:path';

import { defineConfig } from 'vite'

import { buildViteConfig } from './build/buildViteConfig';
import { ViteConfigPaths } from './build/interfaces/viteConfig';

const paths: ViteConfigPaths = {
  srcPath: path.resolve(__dirname, 'src'),
}

export default defineConfig((options) => {
  return buildViteConfig({
    ...options,
    paths,
  });
});

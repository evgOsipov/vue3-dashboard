import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export const buildVitePlugins = () => {
  return [
      vue(),
      tailwindcss(),
  ];
}
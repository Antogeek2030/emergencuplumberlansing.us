import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://emergencyplumberlansing.us',
  output: 'static',
  build: {
    format: 'directory',
  },
  compressHTML: true,
});

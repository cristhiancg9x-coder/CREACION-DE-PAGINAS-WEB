// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tu-web-ya.netlify.app',
  integrations: [sitemap({
    filter: (page) => page !== 'https://tu-web-ya.netlify.app/404',
    serialize(item) {
      if (/contacto/.test(item.url)) {
        item.priority = 0.9;
      }
      return item;
    },
  })],
});
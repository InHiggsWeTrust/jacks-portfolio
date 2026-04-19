// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jack-higglesden.vercel.app',
  markdown: {
    syntaxHighlight: false,
  },
  security: {
    csp: true,
  },
});

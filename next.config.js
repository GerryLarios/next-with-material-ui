/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      'src/components',
      'src/container',
      'src/context',
      'src/database',
      'src/hoc',
      'src/hof',
      'src/hooks',
      'src/layouts',
      'src/pages',
      'src/providers',
      'src/theme',
      'src/types',
      'src/utils',
    ],
  },
  pageExtensions: ['page.tsx', 'api.ts'],
};

module.exports = nextConfig;

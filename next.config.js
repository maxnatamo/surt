const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
};

module.exports = nextConfig;
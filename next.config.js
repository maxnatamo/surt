const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    BASE_ADDRESS: process.env.BASE_ADDRESS ?? "http://localhost:3000",
  },
  serverRuntimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI ?? "mongodb://surt:surt@localhost:27017/",
    MONGODB_DB: process.env.MONGODB_DB ?? "surt",
  }
};

module.exports = nextConfig;
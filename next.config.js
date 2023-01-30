const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    BASE_ADDRESS: process.env.BASE_ADDRESS ?? "http://localhost:3000",
  },
  serverRuntimeConfig: {
    MONGODB_HOSTNAME: process.env.MONGODB_HOSTNAME ?? "localhost",
    MONGODB_DATABASE: process.env.MONGODB_DATABASE ?? "surt",
    MONGODB_USERNAME: process.env.MONGODB_USERNAME ?? "surt",
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD ?? "surt",
  }
};

const useSentry = process.env.SENTRY_AUTH_TOKEN !== undefined;

const sentryWebpackOptions = {
  silent: true,
};

const sentryOptions = {
  hideSourceMaps: false
};

if(useSentry) {
  console.log("[SURT] Sentry monitoring enabled.");

  module.exports = withSentryConfig(nextConfig, sentryWebpackOptions, sentryOptions);
} else {
  module.exports = nextConfig;
}
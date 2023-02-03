const path = require('path');
const withPWA = require('next-pwa')({ dest: 'public' });
const { withSentryConfig } = require('@sentry/nextjs');

/**
 * Next.js configuration
 */

/** @type {import('next').NextConfig} */
let config = {
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

/**
 * PWA configuration with next-pwa
 */

config = withPWA(config);

/**
 * Sentry.io integration
 */

const useSentry = process.env.SENTRY_AUTH_TOKEN !== undefined;

const sentryWebpackOptions = {
  silent: true,
};

const sentryOptions = {
  hideSourceMaps: false
};

if(useSentry) {
  console.log("[SURT] Sentry monitoring enabled.");

  config = withSentryConfig(config, sentryWebpackOptions, sentryOptions);
}

module.exports = config;
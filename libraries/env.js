import getConfig from 'next/config';

const nextConfig = getConfig();

/**
 * Configurations for Next.js that are server-side only.
 */
export const serverConfiguration = nextConfig.serverRuntimeConfig;

/**
 * Configurations for Next.js that are client-side and server-side.
 */
export const runtimeConfiguration = nextConfig.publicRuntimeConfig;
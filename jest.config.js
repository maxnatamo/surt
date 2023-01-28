const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],

  moduleNameMapper: {
    "@components/$": "<rootDir>/components/$1",
    "@libs/$": "<rootDir>/libraries/$1",
    "@styles/$": "<rootDir>/styles/$1",
    '@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
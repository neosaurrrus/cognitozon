import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
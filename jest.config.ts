// eslint-disable-next-line @typescript-eslint/no-var-requires
import nextJest from 'next/jest';

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/', '<rootDir>/test'],
	moduleNameMapper: {
		'^@/(.+)': '<rootDir>/src/$1',
		'^@/shared(.*)$': '<rootDir>/src/shared$1',
		'^@/entities(.*)$': '<rootDir>/src/entities$1',
		'^@/features(.*)$': '<rootDir>/src/features$1',
		'^@/widgets(.*)$': '<rootDir>/src/widgets$1',
		'^@/views(.*)$': '<rootDir>/src/views$1',
		'^@/processes(.*)$': '<rootDir>/src/processes$1',
		'^@/app(.*)$': '<rootDir>/src/application$1',
		'^@test-utils': '<rootDir>/test/test-utils.tsx',
	},

	testEnvironment: 'jest-environment-jsdom',
	modulePathIgnorePatterns: ['node_modules', '<rootDir>/test'],
	verbose: true,
};

module.exports = createJestConfig(customJestConfig);
const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/', '<rootDir>/utils'],
	moduleNameMapper: {
		'^@/shared(.*)$': '<rootDir>/src/shared$1',
		'^@/entities(.*)$': '<rootDir>/src/entities$1',
		'^@/features(.*)$': '<rootDir>/src/features$1',
		'^@/widgets(.*)$': '<rootDir>/src/widgets$1',
		'^@/views(.*)$': '<rootDir>/src/views$1',
		'^@/processes(.*)$': '<rootDir>/src/processes$1',
		'^@/app(.*)$': '<rootDir>/src/application$1',
		'^@test-utils': '<rootDir>/test/utils/test-utils.tsx',
	},

	setupFilesAfterEnv: ['<rootDir>/test/setupTest.ts'],
	testEnvironment: 'jest-environment-jsdom',
	modulePathIgnorePatterns: ['node_modules', '<rootDir>/test/utils'],
	verbose: true,
};

module.exports = createJestConfig(customJestConfig);

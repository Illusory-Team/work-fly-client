module.exports = {
	moduleDirectories: ['node_modules', '<rootDir>/', '<rootDir>/utils'],
	moduleNameMapper: {
		'^@/shared(.*)$': '<rootDir>/src/shared$1',
		'^@/entities(.*)$': '<rootDir>/src/entities$1',
		'^@/features(.*)$': '<rootDir>/src/features$1',
		'^@/widgets(.*)$': '<rootDir>/src/widgets$1',
		'^@/views(.*)$': '<rootDir>/src/views$1',
		'^@/processes(.*)$': '<rootDir>/src/processes$1',
		'^@/app(.*)$': '<rootDir>/src/app',
		'^@test-utils': '<rootDir>/test/utils/test-utils.tsx',
	},

	setupFilesAfterEnv: ['<rootDir>/test/setupTest.ts'],
	testEnvironment: 'jest-environment-jsdom',
	modulePathIgnorePatterns: ['node_modules', '<rootDir>/test/utils'],
	verbose: true,
};

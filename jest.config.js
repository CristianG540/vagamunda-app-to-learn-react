process.env.TZ = 'GMT'; // Use GMT as the time zone for all tests

module.exports = {
  testEnvironment: 'jsdom',
	roots: ['src'],
	coverageThreshold: {
		global: {
			statements: 80,
			branches: 80,
			functions: 80,
			lines: 80
		}
	},
	setupFilesAfterEnv: ['./jest.setup.ts'],
	moduleNameMapper: {
		// Mocks out all these file formats when tests are run.
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy'
	},
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/stories/**/*',
		'!src/**/index.{ts,tsx}',
		'!src/**/*{serviceWorker,d,env,environments,model,models,stubs,mock,mocks,stories}.{ts,tsx}'
	]
};

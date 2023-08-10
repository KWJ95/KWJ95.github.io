import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	projects: [
		{
		  name: 'Microsoft Edge',
		  use: {
			// Supported Microsoft Edge channels are: msedge, msedge-beta, msedge-dev, msedge-canary
			channel: 'msedge',
		  },
		},
	  ],
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;

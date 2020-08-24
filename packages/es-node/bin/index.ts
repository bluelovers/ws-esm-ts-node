#!/usr/bin/env node

import { spawnSync } from 'child_process';

spawnSync('node', [
	'-r',
	'esm',
	...process.argv.slice(2),
], {
	stdio: 'inherit',
});

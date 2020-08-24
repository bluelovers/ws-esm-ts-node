#!/usr/bin/env node

import { spawnSync } from 'child_process';

spawnSync('node', [
	'-r',
	'esm',
	'-r',
	'ts-node/register',
	...process.argv.slice(2),
], {
	stdio: 'inherit',
})

#!/usr/bin/env node

import { spawnSync } from 'child_process';

const env = {
	...process.env,
};

delete env['NODE_OPTIONS'];

spawnSync('node', [
	'-r',
	'esm',
	'-r',
	'ts-node/register',
	...process.argv.slice(2),
], {
	stdio: 'inherit',
	env,
})

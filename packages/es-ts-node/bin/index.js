#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const env = {
    ...process.env,
};
delete env['NODE_OPTIONS'];
child_process_1.spawnSync('node', [
    '-r',
    'esm',
    '-r',
    'ts-node/register',
    ...process.argv.slice(2),
], {
    stdio: 'inherit',
    env,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxpREFBMEM7QUFFMUMsTUFBTSxHQUFHLEdBQUc7SUFDWCxHQUFHLE9BQU8sQ0FBQyxHQUFHO0NBQ2QsQ0FBQztBQUVGLE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTNCLHlCQUFTLENBQUMsTUFBTSxFQUFFO0lBQ2pCLElBQUk7SUFDSixLQUFLO0lBQ0wsSUFBSTtJQUNKLGtCQUFrQjtJQUNsQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUN4QixFQUFFO0lBQ0YsS0FBSyxFQUFFLFNBQVM7SUFDaEIsR0FBRztDQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcblxuaW1wb3J0IHsgc3Bhd25TeW5jIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmNvbnN0IGVudiA9IHtcblx0Li4ucHJvY2Vzcy5lbnYsXG59O1xuXG5kZWxldGUgZW52WydOT0RFX09QVElPTlMnXTtcblxuc3Bhd25TeW5jKCdub2RlJywgW1xuXHQnLXInLFxuXHQnZXNtJyxcblx0Jy1yJyxcblx0J3RzLW5vZGUvcmVnaXN0ZXInLFxuXHQuLi5wcm9jZXNzLmFyZ3Yuc2xpY2UoMiksXG5dLCB7XG5cdHN0ZGlvOiAnaW5oZXJpdCcsXG5cdGVudixcbn0pXG4iXX0=
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
    ...process.argv.slice(2),
], {
    stdio: 'inherit',
    env,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxpREFBMEM7QUFFMUMsTUFBTSxHQUFHLEdBQUc7SUFDWCxHQUFHLE9BQU8sQ0FBQyxHQUFHO0NBQ2QsQ0FBQztBQUVGLE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTNCLHlCQUFTLENBQUMsTUFBTSxFQUFFO0lBQ2pCLElBQUk7SUFDSixLQUFLO0lBQ0wsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDeEIsRUFBRTtJQUNGLEtBQUssRUFBRSxTQUFTO0lBQ2hCLEdBQUc7Q0FDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5cbmltcG9ydCB7IHNwYXduU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5jb25zdCBlbnYgPSB7XG5cdC4uLnByb2Nlc3MuZW52LFxufTtcblxuZGVsZXRlIGVudlsnTk9ERV9PUFRJT05TJ107XG5cbnNwYXduU3luYygnbm9kZScsIFtcblx0Jy1yJyxcblx0J2VzbScsXG5cdC4uLnByb2Nlc3MuYXJndi5zbGljZSgyKSxcbl0sIHtcblx0c3RkaW86ICdpbmhlcml0Jyxcblx0ZW52LFxufSk7XG4iXX0=
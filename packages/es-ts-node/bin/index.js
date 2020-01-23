#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
child_process_1.spawnSync('node', [
    '-r',
    'esm',
    '-r',
    'ts-node/register',
    ...process.argv.slice(2),
], {
    stdio: 'inherit'
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxpREFBMEM7QUFFMUMseUJBQVMsQ0FBQyxNQUFNLEVBQUU7SUFDakIsSUFBSTtJQUNKLEtBQUs7SUFDTCxJQUFJO0lBQ0osa0JBQWtCO0lBQ2xCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQ3hCLEVBQUU7SUFDRixLQUFLLEVBQUUsU0FBUztDQUNoQixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5cbmltcG9ydCB7IHNwYXduU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5zcGF3blN5bmMoJ25vZGUnLCBbXG5cdCctcicsXG5cdCdlc20nLFxuXHQnLXInLFxuXHQndHMtbm9kZS9yZWdpc3RlcicsXG5cdC4uLnByb2Nlc3MuYXJndi5zbGljZSgyKSxcbl0sIHtcblx0c3RkaW86ICdpbmhlcml0J1xufSlcbiJdfQ==
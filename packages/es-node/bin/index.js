#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
child_process_1.spawnSync('node', [
    '-r',
    'esm',
    ...process.argv.slice(2),
], {
    stdio: 'inherit',
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxpREFBMEM7QUFFMUMseUJBQVMsQ0FBQyxNQUFNLEVBQUU7SUFDakIsSUFBSTtJQUNKLEtBQUs7SUFDTCxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUN4QixFQUFFO0lBQ0YsS0FBSyxFQUFFLFNBQVM7Q0FDaEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5pbXBvcnQgeyBzcGF3blN5bmMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuc3Bhd25TeW5jKCdub2RlJywgW1xuXHQnLXInLFxuXHQnZXNtJyxcblx0Li4ucHJvY2Vzcy5hcmd2LnNsaWNlKDIpLFxuXSwge1xuXHRzdGRpbzogJ2luaGVyaXQnLFxufSk7XG4iXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMtbm9kZS10cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVzLW5vZGUtdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsaURBQTBDO0FBRTFDLHlCQUFTLENBQUMsTUFBTSxFQUFFO0lBQ2pCLElBQUk7SUFDSixLQUFLO0lBQ0wsSUFBSTtJQUNKLGtCQUFrQjtJQUNsQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUN4QixFQUFFO0lBQ0YsS0FBSyxFQUFFLFNBQVM7Q0FDaEIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5pbXBvcnQgeyBzcGF3blN5bmMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuc3Bhd25TeW5jKCdub2RlJywgW1xuXHQnLXInLFxuXHQnZXNtJyxcblx0Jy1yJyxcblx0J3RzLW5vZGUvcmVnaXN0ZXInLFxuXHQuLi5wcm9jZXNzLmFyZ3Yuc2xpY2UoMiksXG5dLCB7XG5cdHN0ZGlvOiAnaW5oZXJpdCdcbn0pXG4iXX0=
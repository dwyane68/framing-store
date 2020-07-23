"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || '1337';
const envFound = dotenv_1.default.config();
if (envFound.error) {
    throw new Error("Invalid env");
}
exports.default = {
    port: parseInt(process.env.PORT, 10),
    logs: {
        level: process.env.LOG_LEVEL || 'debug',
    },
    /**
     * API configs
     */
    api: {
        prefix: '/api',
    }
};
//# sourceMappingURL=index.js.map
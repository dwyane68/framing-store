"use strict";
// import 'reflect-metadata'; // We need this in order to use @Decorators
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./loaders/logger"));
async function startServer() {
    const app = express_1.default();
    await require('./loaders').default({ expressApp: app });
    app.listen(config_1.default.port, err => {
        if (err) {
            logger_1.default.error(err);
            process.exit(1);
            return;
        }
        logger_1.default.info(`Server listening on port: ${config_1.default.port}`);
    });
}
startServer();
//# sourceMappingURL=index.js.map
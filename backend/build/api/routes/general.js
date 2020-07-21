"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
exports.default = (app) => {
    app.use('/general', route);
    route.post('/publish', (req, res) => {
        return res.json({ user: req }).status(200);
    });
};
//# sourceMappingURL=general.js.map
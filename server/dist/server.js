"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorhandler_1 = __importDefault(require("errorhandler"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils/utils");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
/**
 * Error Handler. Provides full stack - remove for production
 */
if (!(0, utils_1.isProduction)()) {
    // only use in development
    app.use((0, errorhandler_1.default)());
}
const port = process.env.PORT || 3000;
/**
 * Start Express server.
 */
const server = app.listen({ port }, () => {
    const message = (0, utils_1.isProduction)()
        ? "  App is listening on port %d in %s mode"
        : "  App is running at http://localhost:%d in %s mode";
    console.log(message, port, app.get("env"));
    if (!(0, utils_1.isProduction)()) {
        console.log("  Press CTRL-C to stop\n");
    }
});
exports.default = server;

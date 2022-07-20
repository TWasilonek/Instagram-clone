"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProduction = void 0;
const isProduction = () => process.env.NODE_ENV === "production";
exports.isProduction = isProduction;

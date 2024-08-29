"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
// Middleware setup
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
// Route handling
app.use("/api", api_1.default);
exports.default = app;

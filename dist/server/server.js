"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const config_1 = require("../config");
class Server {
    constructor() {
        this.config = config_1.config;
        this.application = (0, express_1.default)();
        this.server = new http_1.default.Server(this.application);
        this.io = new socket_io_1.default.Server(this.server, {
            cors: {
                origin: true,
                credentials: true
            }
        });
        this.initTest();
    }
    initTest() {
        this.application.get('/', (req, res) => {
            res.send({
                Hola: 'mundo'
            });
        });
    }
    start() {
        this.server.listen(this.config.app.port, () => {
            console.log(`Server corriendo on  http://localhost:${this.config.app.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map
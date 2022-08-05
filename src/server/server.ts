import 'reflect-metadata';
import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

import { config } from '../config';

export class Server {
  public application!: express.Application;
  public server;
  public io!: socketIO.Server;
  public config = config;

  constructor() {
    this.application = express();
    this.server = new http.Server(this.application);
    this.io = new socketIO.Server(this.server, {
      cors: {
        origin: true,
        credentials: true
      }
    });
  }

  public start() {
    this.server.listen(this.config.app.port, () => {
      console.log(`Server corriendo on  http://localhost:${this.config.app.port}`);
    });
  }
}

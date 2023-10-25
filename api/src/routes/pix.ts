import express, { Express } from 'express';
import { PixControllers } from '../controllers/PixControllers';
import cors from 'cors';

let server: Express = express();

server.use(cors());
server.use(express.json());

let controller: PixControllers = new PixControllers();

server.get('/users', controller.listar);

server.post('/transfer', controller.transferencia);

server.get('/transferList/:user/:type', controller.listarTransferencia);

export default server;
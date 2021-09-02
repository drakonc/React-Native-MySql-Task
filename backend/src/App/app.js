import fs from'fs';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import tasksrouter from './Routers/task';
import swaggerUI from 'swagger-ui-express';
import { Config } from './Config/config';
import { Options } from './Swagger/swaggerOption';

const specs = swaggerJSDoc(Options);

var log_file = fs.createWriteStream(__dirname + '/Logs/messages.log', {flags : 'a'});

const app = express();

app.set('port', Config.port || 4000)

app.use(cors());
app.use(morgan('[:date[iso]] :method :url :status :response-time ms - :res[content-length]',{stream: log_file}));
app.use(express.json());

app.use(tasksrouter);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;

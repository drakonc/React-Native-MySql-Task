import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fs from'fs';

var log_file = fs.createWriteStream(__dirname + '/Logs/messages.log', {flags : 'a'});

import tasksrouter from './Routers/task';

const app = express();

app.use(cors());
app.use(morgan('dev',{stream: log_file}));
app.use(express.json());

app.use(tasksrouter);

export default app;

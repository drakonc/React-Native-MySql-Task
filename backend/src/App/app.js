import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import tasksrouter from './Routers/task';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(tasksrouter);

export default app;

import express from 'express';
import tasksrouter from './Routers/task';

const app = express();

app.use(express.json());

app.use(tasksrouter);

export default app;

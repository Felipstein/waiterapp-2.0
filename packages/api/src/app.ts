import express from 'express';
import 'express-async-errors';
import 'dotenv/config';

import { routes } from './routes';
import { errorHandler } from './middlewares/error-handler.middleware';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorHandler);

export { app };

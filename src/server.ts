import express from 'express';
import cors from 'cors';
import { router as productRouter } from './routes/product.js';
import { initDb } from './db/init';

const PORT = 4000;
const RPODUCTS_ENDPOINT = '/products';

const server = express();

server.use(cors());

initDb();

server.listen(4000, () => {
  global.console.log(`Server is running on PORT = ${PORT}`);
});

server.use(RPODUCTS_ENDPOINT, express.json(), productRouter);

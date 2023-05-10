import express from 'express';
import { router as productRouter } from './routes/product';
import { initDb } from './db/init';

const PORT = 4000;
const RPODUCTS_ENDPOINT = '/products';

const server = express();

initDb();

server.listen(4000, () => {
  global.console.log(`Server is running on PORT = ${PORT}`);
});

server.use(RPODUCTS_ENDPOINT, express.json(), productRouter);

// server.get(DEVICES_ENDPOINT, (req, res) => {
//   res.send(products);
// });

// Execution: ts-node --esm ./src/db/sync.ts
import { initDb } from './init';
import { Product } from '../models/Product';
import fs from 'fs';
import path from 'path';

const DATA_LOCATION = path.resolve(__dirname, '../json/products.json');

const syncDb = async() => {
  global.console.log('START');

  const products = JSON.parse(
    fs.readFileSync(DATA_LOCATION, 'utf8'),
  );

  const sequelize = await initDb();

  sequelize.addModels([Product]);

  await Product.sync({ force: true });

  Product.bulkCreate(products)
    .then(() => global.console.log('Data inserted into database'))
    .catch((err) => global.console.error('Error inserting data:', err));

  global.console.log('Tables succesfully synchronized');
};

syncDb();

import { initDb } from './init';
import { Product } from '../models/Product';
import { IProduct } from '../types/IProduct';
import {
  readPhonesSync,
  readTabletsSync,
  readAccessoriesSync,
} from '../utils/helpers';

const syncDb = async() => {
  global.console.log('START');

  const phones: Readonly<IProduct>[] = readPhonesSync();
  const tablets: Readonly<IProduct>[] = readTabletsSync();
  const accessories: Readonly<IProduct>[] = readAccessoriesSync();

  const products = [...phones, ...tablets, ...accessories];

  const sequelize = await initDb();

  sequelize.addModels([Product]);

  await Product.sync({ force: true });

  Product.bulkCreate(products)
    .then(() => global.console.log('Data inserted into database'))
    .catch((err) => global.console.error('Error inserting data:', err));

  global.console.log('Tables succesfully synchronized');
};

syncDb();

// EXECUTION: ts-node --esm ./src/seeder.ts
import fs from 'fs';
import path from 'path';
import { ProductI } from './types/Product';

const DATA_LOCATION = path.resolve(__dirname, './json/phones.json');

try {
  const products: ProductI[] = JSON.parse(
    fs.readFileSync(DATA_LOCATION, 'utf8'),
  );

  global.console.log(products);
} catch (err) {
  global.console.error(`Error reading file: ${err}`);
}

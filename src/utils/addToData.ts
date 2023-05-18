import fs from 'fs';
import { IProduct } from '../types/IProduct';
import { generateProductCode } from './generateProductCode';

const sourceData: IProduct[] = JSON.parse(
  fs.readFileSync(new URL('../json/accessories.json', import.meta.url), 'utf8'),
);

const sourceDataWithCode = sourceData.map(x => ({
  ...x,
  productCode: generateProductCode(x.id),
}));

fs.writeFileSync(
  new URL('../json/ul/accessories.json', import.meta.url),
  JSON.stringify(sourceDataWithCode),
);

global.console.log(sourceDataWithCode.map(x => x.productCode));

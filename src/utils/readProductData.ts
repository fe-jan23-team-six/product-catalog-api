import fs from 'fs';
import { IProduct } from '../types/IProduct';

export const readPhonesSync = (): Readonly<IProduct>[] => (
  JSON.parse(
    fs.readFileSync(new URL('../json/phones.json', import.meta.url), 'utf8'),
  )
);

export const readTabletsSync = (): Readonly<IProduct>[] => (
  JSON.parse(
    fs.readFileSync(new URL('../json/tablets.json', import.meta.url), 'utf8'),
  )
);

export const readAccessoriesSync = (): Readonly<IProduct>[] => (
  JSON.parse(
    fs.readFileSync(
      new URL('../json/accessories.json', import.meta.url),
      'utf8',
    ),
  )
);

// EXECUTION: ts-node --esm ./src/normalize/normalizeTablets.ts
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { ITabletInitial } from '../types/initial/ITabletInitial';
import { IProduct } from '../types/IProduct';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PRODUCTS_LOCATION = path.resolve(__dirname, '../json/tablets.json');
const FINAL_LOCATION = path.resolve(
  __dirname,
  '../json/normalized/tablets.json',
);

const productsInitial: ITabletInitial[] = JSON.parse(
  fs.readFileSync(PRODUCTS_LOCATION, 'utf8'),
);

const products: IProduct[] = productsInitial.map(product => (
  {
    slug: product.id,
    namespaceId: product.namespaceId,
    category: 'tablets',
    name: product.name,
    priceRegular: product.priceRegular,
    priceDiscount: product.priceDiscount,
    screen: product.screen,
    capacity: product.capacity,
    ram: product.ram,

    color: product.color,
    year: Math.floor(Math.random() * (2025 - 2020 + 1)) + 2020,
    image: product.images[0],
    capacityAvailable: product.capacityAvailable,
    colorsAvailable: product.colorsAvailable,
    images: product.images,
    description: product.description,
    resolution: product.resolution,
    processor: product.processor,
    camera: product.camera,
    zoom: product.zoom,
    cell: product.cell,
  }
));

fs.writeFileSync(FINAL_LOCATION, JSON.stringify(products));

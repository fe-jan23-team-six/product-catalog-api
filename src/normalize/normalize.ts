// EXECUTION: ts-node --esm ./src/normalize/normalize.ts
import fs from 'fs';
import path, { dirname } from 'path';
import { IProductInitial } from '../types/initial/IProductInitial';
import { IProductDetailsInitial }
  from '../types/initial/IProductDetailsInitial';
import { IProduct } from '../types/IProduct';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PRODUCTS_LOCATION = path.resolve(__dirname, '../json/phones.json');
const DETAILS_LOCATION = path.resolve(__dirname, '../json/phones');
const FINAL_LOCATION = path.resolve(__dirname, '../json/products.json');

type ProductWithDetails = Array<IProductInitial & IProductDetailsInitial>;

const productsInitial: IProductInitial[] = JSON.parse(
  fs.readFileSync(PRODUCTS_LOCATION, 'utf8'),
);

const productsWithDetails: ProductWithDetails = productsInitial.map(product => {
  const details = JSON.parse(
    fs.readFileSync(
      path.resolve(DETAILS_LOCATION, `${product.phoneId}.json`),
      'utf8',
    ),
  );

  return {
    ...product,
    ...details,
  };
});

const products: IProduct[] = productsWithDetails.map(product => (
  {
    slug: product.id,
    namespaceId: product.namespaceId,
    category: product.category,
    name: product.name,
    priceRegular: product.priceRegular,
    priceDiscount: product.priceDiscount,
    screen: product.screen,
    capacity: product.capacity,
    ram: product.ram,

    color: product.color,
    year: product.year,
    image: product.image,
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

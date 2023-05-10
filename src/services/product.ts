import { Product } from '../models/Product';

export async function getAll() {
  const products = (await Product.findAll()).slice(0, 3);

  return products;
}

export default {
  getAll,
};

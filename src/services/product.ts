import { Product } from '../models/Product';
import { WithId } from '../types/WithId';
import { IProductMain } from '../types/IProduct';
import { getProductMain } from '../converters/getProductMain';

export async function getAll(): Promise<WithId<IProductMain>[]> {
  const products = (await Product.findAll())
    .slice(0, 11)
    .map(getProductMain);

  return products;
}

export async function getById(id: number) {
  const product = await Product.findByPk(id);

  return product;
}

export default {
  getAll,
  getById,
};

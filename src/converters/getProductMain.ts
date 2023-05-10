import { Product } from '../models/Product';
import { IProductMain } from '../types/IProduct';
import { WithId } from '../types/WithId';

export function getProductMain(product: Product): WithId<IProductMain> {
  const {
    id,
    slug,
    namespaceId,
    category,
    name,
    priceRegular,
    priceDiscount,
    screen,
    capacity,
    ram,
  } = product;

  return {
    id,
    slug,
    namespaceId,
    category,
    name,
    priceRegular,
    priceDiscount,
    screen,
    capacity,
    ram,
  };
}

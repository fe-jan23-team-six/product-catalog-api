import { Product } from '../models/Product';
import { Amount } from '../types/Amount';
import { Category } from '../types/Categories';

export const getAmount = (products: Product[]): Amount => {
  const amount: Amount = {
    [Category.PHONES]: 0,
    [Category.TABLETS]: 0,
    [Category.ACCESSORIES]: 0,
  };

  return products.reduce((accum: Amount, product: Product) => {
    switch (product.category) {
      case Category.PHONES:
        return { ...accum, [Category.PHONES]: accum[Category.PHONES] + 1 };
      case Category.TABLETS:
        return { ...accum, [Category.TABLETS]: accum[Category.TABLETS] + 1 };
      case Category.ACCESSORIES:
        return {
          ...accum,
          [Category.ACCESSORIES]: accum[Category.ACCESSORIES] + 1,
        };
      default:
        return { ...accum };
    }
  }, amount);
};

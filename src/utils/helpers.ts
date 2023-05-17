import fs from 'fs';
import { IProduct } from '../types/IProduct';
import { Product } from '../models/Product';
import { Amount } from '../types/Amount';
import { Category } from '../types/Categories';

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

export const getDiscountPercent = ({
  priceDiscount,
  priceRegular,
}: Product) => {
  const discountPercent = 100 - priceDiscount * 100 / priceRegular;

  return discountPercent;
};

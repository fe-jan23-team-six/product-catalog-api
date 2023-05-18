import { Product } from '../models/Product';

export const getDiscountPercent = ({
  priceDiscount,
  priceRegular,
}: Product) => {
  const discountPercent = 100 - priceDiscount * 100 / priceRegular;

  return discountPercent;
};

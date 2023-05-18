import { OrderItem } from 'sequelize';
import { Product } from '../models/Product';
import { getDiscountPercent } from '../utils/getDiscountPercent';
import { getOrder } from '../utils/getOrder';
import { Category } from '../types/Categories';
import { SortBy } from '../types/SortBy';

export async function getAll() {
  return Product.findAll();
}

export async function getById(id: string) {
  return Product.findByPk(id);
}

export async function getPageByCategory(
  category: Category,
  page: number,
  limit: number,
  sort: SortBy,
) {
  const products = await Product.findAll({
    where: {
      category,
    },
    order: [getOrder(sort) as OrderItem],
    limit,
    offset: limit * (page - 1),
  });

  return products;
}

export async function getNew(limit: number) {
  return Product.findAll({
    limit,
    order: [['year', 'DESC']],
  });
}

export async function getProductsWithDiscounts(limit: number) {
  const allProducts = await Product.findAll();

  allProducts.sort((prevProduct, curProduct) => {
    const prevDiscount = getDiscountPercent(prevProduct);
    const curDiscount = getDiscountPercent(curProduct);

    return curDiscount - prevDiscount;
  });

  return allProducts.slice(0, limit);
}

export default {
  getAll,
  getById,
  getPageByCategory,
  getNew,
  getProductsWithDiscounts,
};

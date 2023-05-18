import { Product } from '../models/Product';
import { getDiscountPercent, getOrder } from '../utils/helpers';
import { Category } from '../types/Categories';
import { SortBy } from '../types/SortBy';
import { Op, OrderItem } from 'sequelize';

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

export const getRecomended = async(productId: string) => {
  const product = await getById(productId);
  const price = product?.priceDiscount || 500;
  const color = productId.split('-').slice(-1);

  const coefficient = 0.1; // can be changed
  const priceRange = [price - price * coefficient, price + price * coefficient];

  const recomendedPrice = await Product.findAll({
    where: {
      priceDiscount: {
        [Op.between]: priceRange,
      },
    },
    limit: 5,
  });

  const recomendedColor = await Product.findAll({
    where: {
      id: {
        [Op.like]: `%${color}%`,
      },
    },
    limit: 5,
  });

  return [...recomendedPrice, ...recomendedColor];
};

export default {
  getAll,
  getById,
  getPageByCategory,
  getNew,
  getProductsWithDiscounts,
  getRecomended,
};

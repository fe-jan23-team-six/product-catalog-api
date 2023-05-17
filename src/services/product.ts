import { Product } from '../models/Product';
// import { SortBy } from '../types/SortBy';
// import { OrderItem } from 'sequelize';
import { getDiscountPercent } from '../utils/helpers';
import { Category } from '../types/Categories';

export async function getAll() {
  return Product.findAll();
}

export async function getById(id: string) {
  return Product.findByPk(id);
}

export async function getAllByCategory(category: Category) {
  return Product.findAll({
    raw: true,
    where: {
      category,
    },
  });
}

// export async function getSrtuctured(
//   page: number,
//   limit: number,
//   sort: SortBy,
// ) {
//   const orderBy = [];

//   switch (sort) {
//     case SortBy.Oldest:
//       orderBy.push('year');
//       orderBy.push('DESC');
//       break;
//     case SortBy.Newest:
//       orderBy.push('year');
//       orderBy.push('DESC');
//       break;
//     case SortBy.PriceLowest:
//       orderBy.push('priceDiscount');
//       orderBy.push('ASC');
//       break;
//     case SortBy.Default:
//     default:
//       orderBy.push('name');
//       orderBy.push('DESC');
//       break;
//   }

//   const products = await Product.findAll({
//     where: {
//       category: 'phones',
//     },
//     order: [orderBy as OrderItem],
//     limit,
//     offset: limit * (page - 1),
//   });

//   return products;
// }

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
  getAllByCategory,
  // getSrtuctured,
  getNew,
  getProductsWithDiscounts,
};

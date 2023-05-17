import { Request, Response } from 'express';

import productService from '../services/product';
import { getAmount as countAmount } from '../utils/helpers';
import { Category } from '../types/Categories';

export const getAll = async(req: Request, res: Response) => {
  const products = await productService.getAll();

  res.send(products);
};

export const getOne = async(
  req: Request,
  res: Response,
) => {
  const { productId } = req.params;

  const foundProduct = await productService.getById(productId);

  if (!foundProduct) {
    res.sendStatus(404);

    return;
  }

  res.send(foundProduct);
};

export const getPhones = async(req: Request, res: Response) => {
  const phones = await productService.getAllByCategory(Category.PHONES);

  res.send(phones);
};

export const getTablets = async(req: Request, res: Response) => {
  const tablets = await productService.getAllByCategory(Category.TABLETS);

  res.send(tablets);
};

export const getAccessories = async(req: Request, res: Response) => {
  const accessories
    = await productService.getAllByCategory(Category.ACCESSORIES);

  res.send(accessories);
};

export const getAmount = async(req: Request, res: Response) => {
  const products = await productService.getAll();
  const amount = countAmount(products);

  res.send(amount);
};

// export const getAll = async(req: Request, res: Response) => {
//   const {
//     page = 1,
//     limit = 16,
//     sort = SortBy.Default,
//   } = req.query;

//   const products = await productService
//     .getSrtuctured(+page, +limit, sort as SortBy);

//   res.send(products);
// };

export const getNew = async(req: Request, res: Response) => {
  const { limit = 10 } = req.query;
  const limitNumber = Number(limit);

  if (isNaN(limitNumber)) {
    res.sendStatus(400);

    return;
  }

  const products = await productService.getNew(limitNumber);

  return res.send(products);
};

export const getProductsWithDiscounts = async(req: Request, res: Response) => {
  const { limit = 10 } = req.query;
  const limitNumber = Number(limit);

  if (isNaN(limitNumber)) {
    res.sendStatus(400);

    return;
  }

  const products = await productService.getProductsWithDiscounts(limitNumber);

  return res.send(products);
};

export default {
  getAmount,
  getPhones,
  getTablets,
  getAccessories,
  getAll,
  getOne,
  getNew,
  getProductsWithDiscounts,
};

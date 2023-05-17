import { NextFunction, Request, Response } from 'express';

import productService from '../services/product';
import { SortBy } from '../types/SortBy';
import { getAmount as countAmount } from '../utils/helpers';

export const getAmount = async(req: Request, res: Response) => {
  const products = await productService.getAll();
  const amount = countAmount(products);

  res.send(amount);
};

export const getAll = async(req: Request, res: Response) => {
  const {
    page = 1,
    limit = 16,
    sort = SortBy.Default,
  } = req.query;

  const products = await productService
    .getSrtuctured(+page, +limit, sort as SortBy);

  res.send(products);
};

export const getOne = async(
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const productId = Number(req.params.productId);

  if (isNaN(productId)) {
    next();

    return;
  }

  const foundProduct = await productService.getById(productId);

  if (!foundProduct) {
    res.sendStatus(404);

    return;
  }

  res.send(foundProduct);
};

export const getOneBySlug = async(req: Request, res: Response) => {
  const { productSlug } = req.params;

  const [foundProduct] = await productService.getBySlug(productSlug);

  if (!foundProduct) {
    res.sendStatus(404);

    return;
  }

  res.send(foundProduct);
};

export const getNew = async(req: Request, res: Response) => {
  const { limit = 10 } = req.query;
  const products = await productService.getNew(+limit);

  return res.send(products);
};

export const getProductsWithDiscounts = async(req: Request, res: Response) => {
  const { limit = 10 } = req.query;
  const products = await productService.getProductsWithDiscounts(+limit);

  return res.send(products);
};

export default {
  getAmount,
  getAll,
  getOne,
  getOneBySlug,
  getNew,
  getProductsWithDiscounts,
};

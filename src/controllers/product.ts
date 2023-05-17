import { Request, Response } from 'express';

import productService from '../services/product';
import { getAmount as countAmount } from '../utils/helpers';
import { Category } from '../types/Categories';
import { SortBy } from '../types/SortBy';

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
  const {
    page = 1,
    limit = 16,
    sort = SortBy.Alphabetically,
  } = req.query;

  const isDataValid = isFinite(+page) && isFinite(+limit);

  if (!isDataValid) {
    res.sendStatus(400);

    return;
  }

  const phones = await productService.getPageByCategory(
    Category.PHONES,
    +page,
    +limit,
    sort as SortBy,
  );

  res.send(phones);
};

export const getTablets = async(req: Request, res: Response) => {
  const {
    page = 1,
    limit = 16,
    sort = SortBy.Alphabetically,
  } = req.query;

  const isDataValid = isFinite(+page) && isFinite(+limit);

  if (!isDataValid) {
    res.sendStatus(400);

    return;
  }

  const tablets = await productService.getPageByCategory(
    Category.TABLETS,
    +page,
    +limit,
    sort as SortBy,
  );

  res.send(tablets);
};

export const getAccessories = async(req: Request, res: Response) => {
  const {
    page = 1,
    limit = 16,
    sort = SortBy.Alphabetically,
  } = req.query;

  const isDataValid = isFinite(+page) && isFinite(+limit);

  if (!isDataValid) {
    res.sendStatus(400);

    return;
  }

  const accessories = await productService.getPageByCategory(
    Category.ACCESSORIES,
    +page,
    +limit,
    sort as SortBy,
  );

  res.send(accessories);
};

export const getNew = async(req: Request, res: Response) => {
  const { limit = 10 } = req.query;

  if (isNaN(+limit)) {
    res.sendStatus(400);

    return;
  }

  const products = await productService.getNew(+limit);

  return res.send(products);
};

export const getProductsWithDiscounts = async(req: Request, res: Response) => {
  const { limit = 10 } = req.query;

  if (isNaN(+limit)) {
    res.sendStatus(400);

    return;
  }

  const products = await productService.getProductsWithDiscounts(+limit);

  return res.send(products);
};

export const getAmount = async(req: Request, res: Response) => {
  const products = await productService.getAll();
  const amount = countAmount(products);

  res.send(amount);
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

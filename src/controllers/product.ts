import { Request, Response } from 'express';

import productService from '../services/product';

export const getAll = async(req: Request, res: Response) => {
  const products = await productService.getAll();

  res.send(products);
};

export const getOne = async(req: Request, res: Response) => {
  const productId = Number(req.params.productId);

  if (isNaN(productId)) {
    res.sendStatus(400);

    return;
  }

  const foundProduct = await productService.getById(productId);

  if (!foundProduct) {
    res.sendStatus(404);

    return;
  }

  res.send(foundProduct);
};
export default {
  getAll,
  getOne,
};

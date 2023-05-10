import express from 'express';

import productService from '../services/product';

export const getAll = async(req: express.Request, res: express.Response) => {
  const products = await productService.getAll();

  res.send(products);
};

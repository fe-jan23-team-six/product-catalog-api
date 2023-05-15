import express from 'express';
import productController from '../controllers/product';

export const router = express.Router();

router.get('/', productController.getAll);
router.get('/amount', productController.getAllAmount);
router.get('/new', productController.getNew);
router.get('/discount', productController.getProductsWithDiscounts);

router.get('/:productId', productController.getOne);
router.get('/:productSlug', productController.getOneBySlug);

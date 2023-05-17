import express from 'express';
import productController from '../controllers/product';

export const router = express.Router();

router.get('/', productController.getAll);

router.get('/phones', productController.getPhones);
router.get('/tablets', productController.getTablets);
router.get('/accessories', productController.getAccessories);

router.get('/amount', productController.getAmount);
router.get('/new', productController.getNew);
router.get('/discount', productController.getProductsWithDiscounts);

router.get('/:productId', productController.getOne);

import express from 'express';
import { getAll } from '../controllers/product';

export const router = express.Router();

router.get('/', getAll);

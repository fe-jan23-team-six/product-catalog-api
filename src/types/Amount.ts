import { Category } from '../types/Categories';

export type Amount = {
  [key in Category]: number;
};

import { SortBy } from '../types/SortBy';

export const getOrder = (sort: SortBy) => {
  switch (sort) {
    case SortBy.Newest:
      return ['year', 'DESC'];

    case SortBy.Cheapest:
      return ['priceDiscount', 'ASC'];

    case SortBy.Alphabetically:
    default:
      return ['name', 'DESC'];
  }
};

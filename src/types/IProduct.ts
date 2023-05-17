import { IDescription } from './IDescription';

export interface IProduct {
  slug: string,
  namespaceId: string,
  category: string,
  name: string,
  priceDiscount: number,
  priceRegular: number,
  screen: string,
  capacity: string,
  ram: string,
  color: string,
  year: number,
  image: string;
  capacityAvailable: string[],
  colorsAvailable: string[],
  images: string[],
  description: IDescription[],
  resolution: string,
  processor: string,
  camera: string | null,
  zoom: string | null,
  cell: string[]
}

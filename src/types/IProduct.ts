import { IDescription } from './IDescription';

export interface IProductDetails {
  color: string;
  year: number;
  image: string;
  capacityAvailable: string[];
  colorsAvailable: string[];
  images: string[];
  description: IDescription[];
  resolution: string;
  processor: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export interface IProductMain {
  slug: string;
  namespaceId: string;
  category: string;
  name: string;
  priceRegular: number;
  priceDiscount: number;
  screen: string;
  capacity: string;
  ram: string;
}

export type IProduct = IProductMain & IProductDetails;

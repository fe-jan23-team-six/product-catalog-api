import { IDescription } from '../IDescription';

export interface IAccessoriesInitial {
  id: string, // 'apple-watch-se-44mm-space-gray'
  namespaceId: string,
  name: string,
  capacityAvailable: string[],
  capacity: string,
  priceRegular: number,
  priceDiscount: number,
  colorsAvailable: string[],
  color: string,
  images: string[],
  description: IDescription[],
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  cell: string[]
}

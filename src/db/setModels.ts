import {
  SequelizeConfigLocal,
  SequelizeConfigRemote,
} from '../types/SequelizeConfig';
import { Product } from '../models/Product';

export const setModels = (
  sequelizeConfig: SequelizeConfigLocal | SequelizeConfigRemote,
): void => {
  if (sequelizeConfig.options) {
    sequelizeConfig.options.models = [Product];
  }
};

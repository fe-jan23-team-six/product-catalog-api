import {
  SequelizeConfigLocal,
  SequelizeConfigRemote,
} from './types/SequelizeConfig';

export const developmentConfig: SequelizeConfigLocal = {
  database: 'postgres',
  username: 'postgres',
  password: '133043',
  options: {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
  },
};

export const productionConfig: SequelizeConfigRemote = {
  // eslint-disable-next-line max-len
  uri: 'postgresql://lipikhin.serhii:dm8pMHI5Ycig@ep-dry-fog-719936.eu-central-1.aws.neon.tech/neondb',
  options: {
    dialectOptions: {
      ssl: true,
    },
  },
};

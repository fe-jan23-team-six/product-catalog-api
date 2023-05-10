import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/Product';

// eslint-disable-next-line max-len
const URI = 'postgresql://lipikhin.serhii:dm8pMHI5Ycig@ep-dry-fog-719936.eu-central-1.aws.neon.tech/neondb';

export const initDb = async() => {
  // const sequelize = new Sequelize('postgres', 'postgres', '133043', {
  //   models: [
  //     Product,
  //   ],
  //   host: 'localhost',
  //   dialect: 'postgres',
  //   logging: false,
  // });

  const sequelize = new Sequelize(
    URI,
    {
      models: [
        Product,
      ],
      dialectOptions: {
        ssl: true,
      },
    },
  );

  try {
    sequelize.authenticate({ logging: false });
    global.console.log('Connection to db has been established successfully.');
  } catch (error) {
    global.console.error('Unable to connect to the database:', error);
  }

  return sequelize;
};

import { Sequelize } from 'sequelize-typescript';

export const initDb = async() => {
  const sequelize = new Sequelize('postgres', 'postgres', '133043', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
  });

  try {
    sequelize.authenticate({ logging: false });
    global.console.log('Connection to db has been established successfully.');
  } catch (error) {
    global.console.error('Unable to connect to the database:', error);
  }

  return sequelize;
};

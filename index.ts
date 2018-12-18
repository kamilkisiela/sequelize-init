import { Message } from './models/message';
import { User } from './models/user';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'test',
  username: 'test',
  password: 'test',
  dialect: 'postgres',
  storage: ':memory:',
});

sequelize.addModels([User, Message]);

import { Table, Column, HasMany, Model } from 'sequelize-typescript';
import { Message } from './message';

console.log('User');

@Table
export class User extends Model<User> {
  @Column
  username: string;

  @HasMany(() => Message, {
    foreignKey: 'senderId',
    sourceKey: 'id',
  })
  senderMessages: Message[];
}

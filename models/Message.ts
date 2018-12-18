import { Table, Model, BelongsTo, Column } from 'sequelize-typescript';
import { User } from './User';

console.log('Message');

@Table
export class Message extends Model<Message> {
  @BelongsTo(() => User, {
    foreignKey: 'senderId',
    targetKey: 'id',
  })
  sender: User;

  @Column
  content: string;
}

import { Column, Model, Table } from 'sequelize-typescript';

@Table
export default class User extends Model<User> {
  @Column
  email: string;

  @Column
  firstName: string;

  @Column({ defaultValue: true })
  lastName: boolean;

  @Column({ defaultValue: true })
  birthday: string;

  @Column({ defaultValue: true })
  password: string;
}

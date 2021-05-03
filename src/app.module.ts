import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model';
import { UserModule } from './routers/user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      models: [User],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

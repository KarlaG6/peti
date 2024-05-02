import { Module } from '@nestjs/common';
import { AcccesoriesModule } from './acccesories/acccesories.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AcccesoriesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'root1234',
      database: 'db_crud',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

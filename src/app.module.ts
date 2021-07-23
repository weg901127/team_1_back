import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoModule } from "./models/todo";
import bookinfo from './models/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "gilee",
      password: "1234",
      database: "test",
      entities: [bookinfo],
      synchronize: true
    }),
	TodoModule
  ]
})
export class AppModule {}

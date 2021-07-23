import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoService } from "./todo.service";
import bookinfo from "src/models/todo.entity";

@Module({
  imports: [TypeOrmModule.forFeature([bookinfo])],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}

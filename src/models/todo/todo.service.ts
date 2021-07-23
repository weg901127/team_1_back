import { Injectable } from "@nestjs/common";
import bookinfo from "src/models/todo.entity";
import { ICreateTodoDto } from "./interfaces/dto.interface";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(bookinfo) private readonly bookinfo: Repository<bookinfo>
  ) {}

  createOneTodo(createTodoDto: ICreateTodoDto) {
    return this.bookinfo.create(createTodoDto).save();
  }

  getTodoList() {
    return this.bookinfo.find({
      select: ["id", "title", "author", "publisher", "isbn"],
      order: { id: 1 }
    });
  }

  getDetailTodo(id: number) {
    return this.bookinfo.findOne(id);
  }

  async toggleTodo(id: number) {
    const before = await this.bookinfo.findOne(id);
    await this.bookinfo.update(id, { isDone: !before.isDone });
  }

  removeOneTodo(id: number) {
    return this.bookinfo.delete(id);
  }
}

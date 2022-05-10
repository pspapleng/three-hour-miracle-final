import { Injectable } from '@nestjs/common';
import { CourseRepository } from './../pkg/dal/course/course.repository';

@Injectable()
export class CourseService {
  constructor(private courseRepository: CourseRepository) {}

  // create(createTodoDto: CreateTodoDto) {
  //   const newTodo = this.todoRepository.create({
  //     message: createTodoDto.message,
  //     status: TODO_STATUS.Todo,
  //   });
  //   return this.todoRepository.save(newTodo);
  // }

  // findAll(query: QueryTodoDto) {
  //   return this.todoRepository.find({
  //     take: query.limit,
  //     skip: query.skip,
  //   });
  // }

  // findOne(id: string) {
  //   return this.todoRepository.findOne({ id: id });
  // }

  // async update(id: string, updateTodoDto: UpdateTodoDto) {
  //   const todo = await this.findOne(id);
  //   if (updateTodoDto.message) todo.message = updateTodoDto.message;
  //   if (updateTodoDto.status) todo.status = updateTodoDto.status;

  //   return this.todoRepository.save(todo);
  // }

  // async remove(id: string) {
  //   const todo = await this.findOne(id);
  //   return this.todoRepository.softRemove(todo);
  // }
}

import { TODO_STATUS } from './../../pkg/dal/todo/todo.enum';
import { PartialType } from '@nestjs/mapped-types';
import { ITodo } from 'src/pkg/dal/todo/todo.interface';
import { CreateTodoDto } from './create-todo.dto';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdateTodoDto
  extends PartialType(CreateTodoDto)
  implements Partial<Pick<ITodo, 'status'>>
{
  @IsOptional()
  @IsEnum(TODO_STATUS)
  status?: TODO_STATUS;
}

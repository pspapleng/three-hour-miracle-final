import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../common/common.entity';
import { TODO_STATUS } from './todo.enum';
import { ITodo } from './todo.interface';

@Entity('todo')
export class TodoEntity extends CommonEntity implements ITodo {
  @Column({ type: 'varchar', length: 255 })
  message: string;

  @Column({ type: 'enum', enum: TODO_STATUS })
  status: TODO_STATUS;
}

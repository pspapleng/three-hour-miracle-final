import { ICommon } from '../common/common.interface';
import { TODO_STATUS } from './todo.enum';

export interface ITodo extends ICommon {
  message: string;
  status: TODO_STATUS;
}

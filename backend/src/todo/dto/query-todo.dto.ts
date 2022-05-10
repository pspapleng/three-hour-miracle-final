import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class QueryTodoDto {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  skip?: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  limit?: number = 50;
}

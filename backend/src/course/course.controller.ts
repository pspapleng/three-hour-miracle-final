import { Controller } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // @Post()
  // create(@Body() createTodoDto: CreateTodoDto) {
  //   return this.todoService.create(createTodoDto);
  // }

  // @Get()
  // findAll(@Query() query: QueryTodoDto) {
  //   return this.todoService.findAll(query);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.todoService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
  //   return this.todoService.update(id, updateTodoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.todoService.remove(id);
  // }
}

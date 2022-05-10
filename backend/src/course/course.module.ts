import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseRepository } from './../pkg/dal/course/course.repository';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}

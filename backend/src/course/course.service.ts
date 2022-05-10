import { Injectable } from '@nestjs/common';
import { CourseRepository } from './../pkg/dal/course/course.repository';

@Injectable()
export class CourseService {
  constructor(private courseRepository: CourseRepository) {}

  findAll() {
    return this.courseRepository.find();
  }
}

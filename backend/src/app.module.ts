import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { HealthModule } from './health/health.module';
import { ConfigProvider } from './pkg/provider/config.provider';
import { LoggerProvider } from './pkg/provider/logger.provider';
import { PostgresProvider } from './pkg/provider/postgres.provider';

@Module({
  imports: [
    ConfigProvider,
    LoggerProvider,
    HealthModule,
    PostgresProvider,
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { HealthModule } from './health/health.module';
import { Module } from '@nestjs/common';
import { PostgresProvider } from './pkg/provider/postgres.provider';
import { ConfigProvider } from './pkg/provider/config.provider';
import { LoggerProvider } from './pkg/provider/logger.provider';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigProvider,
    LoggerProvider,
    HealthModule,
    PostgresProvider,
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

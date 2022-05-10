import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.useLogger(app.get(Logger));
  app.setGlobalPrefix('/api');

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);
  const logger = app.get(Logger);
  logger.log(`server listen on port : ${port}`, 'bootstrap');
}
bootstrap();

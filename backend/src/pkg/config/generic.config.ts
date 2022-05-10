import { registerAs } from '@nestjs/config';

export const GenericConfig = registerAs('generic', () => ({
  port: Number(process.env.PORT || 8080),
  mode: process.env.MODE || 'dev',
}));

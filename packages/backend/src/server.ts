import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

export const app = async (expressInstance?: express.Express): Promise<any> => {
  const appServer = await NestFactory.create(
    AppModule,
    expressInstance ? new ExpressAdapter(expressInstance) : undefined,
  );
  appServer.setGlobalPrefix('api');

  return appServer;
};

import { FastifyReply, FastifyRequest } from 'fastify';
import { buildApp } from './app';
import { logger } from './config/logger';

export default async (request: FastifyRequest, reply: FastifyReply) => {
  const app = buildApp();
  logger.info(app.printRoutes())
  await app.ready();
  app.server.emit('request', request, reply)
}
import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from './config/logger';

const app = fastify({
  logger
})

app.register(import('./app'), {
  prefix: '/jesus'
})

export default async (request: FastifyRequest, reply: FastifyReply) => {
  await app.ready();
  logger.info(app.printRoutes())
  app.server.emit('request', request, reply)
}
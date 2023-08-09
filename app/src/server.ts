import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from './config/logger';

const app = fastify({
  logger
})

app.register(import('./app'))

export default async (request: FastifyRequest, reply: FastifyReply) => {
  await app.ready();
  app.server.emit('request', request, reply)
}
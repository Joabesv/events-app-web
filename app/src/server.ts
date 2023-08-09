import { FastifyReply, FastifyRequest } from 'fastify';
import { buildApp } from './app';
import { logger } from './config/logger';


export default async (request: FastifyRequest, reply: FastifyReply) => {
  const app = await buildApp({ logger });
  try {
    logger.info(app.printRoutes());
    app.ready();
    app.server.emit('request', request, reply)
  } catch(error) {
    app.log.fatal({ error },'error on startup')
    throw error;
  }
}
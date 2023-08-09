import { FastifyReply, FastifyRequest } from 'fastify';
import { buildApp } from './app';
import { logger } from './config/logger';


export async function init(request: FastifyRequest, reply: FastifyReply)  {
  const app = await buildApp({ logger });
  try {
    logger.info(app.printRoutes());
    // app.ready();
    // app.server.emit('request', request, reply)
    await app.listen({ port: 5000, host: '0.0.0.0' })
  } catch(error) {
    app.log.fatal({ error },'error on startup')
    throw error;
  }
}

init();
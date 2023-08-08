import { fastify, type FastifyServerOptions } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import healtcheck from './modules/healthcheck';

export async function buildApp(opts: FastifyServerOptions = {}) {
  const app = fastify(opts);

  try {
    app.register(healtcheck)  
    app.register(fastifyCors, {
      origin: '*'
    })
  } catch (error) {
    app.log.fatal({ error }, 'setup app error');
    throw error;
  }

  return app;
}
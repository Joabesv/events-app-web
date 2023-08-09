import { fastify, type FastifyServerOptions } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { fastifyAutoload } from '@fastify/autoload';
import { join } from 'node:path';

export async function buildApp(opts: FastifyServerOptions = {}) {
  const app = fastify(opts);

  try {
    app.register(fastifyAutoload, {
      dir: join(__dirname, 'modules')
    })
    app.register(fastifyAutoload, {
      dir: join(__dirname, 'plugins')
    })
    app.register(fastifyCors, {
      origin: '*'
    })
  } catch (error) {
    app.log.fatal({ error }, 'setup app error');
    throw error;
  }

  return app;
}
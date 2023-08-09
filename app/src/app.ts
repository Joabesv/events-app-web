import { fastify, FastifyInstance, type FastifyServerOptions } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { fastifyAutoload } from '@fastify/autoload';
import { join } from 'desm';

// export function buildApp(opts: FastifyServerOptions = {}) {
//   const app = fastify(opts);

//   try {
//     app.register(fastifyAutoload, {
//       dir: join(import.meta.url, 'modules')
//     })
//     app.register(fastifyAutoload, {
//       dir: join(import.meta.url, 'plugins')
//     })
//     app.register(fastifyCors, {
//       origin: '*'
//     })
//     app.get('/', async (request, reply) => {
//       reply.send('started')
//     })
//   } catch (error) {
//     app.log.fatal({ error }, 'setup app error');
//     throw error;
//   }

//   return app;
// }


export default async function routes(app: FastifyInstance, opts: Record<string, unknown>) {
  app.get('/', async (request, reply) => {
    return { msg: 'teste' }
  })
}
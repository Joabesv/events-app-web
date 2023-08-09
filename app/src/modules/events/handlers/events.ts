import type { RouteHandler } from 'fastify';

export const getEventsHandler: RouteHandler = async (request, reply) => {
  
  return reply.send({
    name: 'Joabe',
    age: 17
  })  
}
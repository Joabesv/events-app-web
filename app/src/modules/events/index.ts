import type { FastifyInstance } from 'fastify';
import { getEventsHandler } from "./handlers/events";

export default async function(app: FastifyInstance) {
  app.get('/', getEventsHandler)
}
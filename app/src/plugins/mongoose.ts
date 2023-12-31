import type { FastifyInstance } from 'fastify';
import { connect } from 'mongoose';


type MongooseOptions = {
  MONGODB_CONNECTION_URL: string;
}

export const autoConfig = { MONGODB_CONNECTION_URL: 'mongodb+srv://admin:irineu0102@hackaton-sofia.4mos6vt.mongodb.net/?retryWrites=true&w=majority' }
export default async function mongoose(app: FastifyInstance, opts: MongooseOptions) {
  const connection = await connect(opts.MONGODB_CONNECTION_URL);
  try {
    app.decorate('mongoose', connection);
    app.log.info('[PLUGIN] Mongoose');
  } catch (error) {
    app.log.error({ error }, '[PLUGIN] Error Connecting to mongodb');
    // Do not let the database connection hanging
    app.addHook('onClose', async () => {
      await connection.disconnect();
    });
  }
}
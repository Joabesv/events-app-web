import { buildApp } from './app';
import { logger } from './config/logger';

async function start() {
  const app = await buildApp({ logger });
  try {
    logger.info(app.printRoutes());
    app.listen({ port: 5000, host: '0.0.0.0' })
  } catch(error) {
    app.log.fatal({ error },'error on startup')
    throw error;
  }
}

start();
import Fastify, { FastifyInstance } from 'fastify';
import productsRoutes from './infrastructure/http/routes/products.routes';

export async function buildApp(): Promise<FastifyInstance> {
    const fastify = Fastify({
        logger: {
            level: 'info',
            transport: {
                target: 'pino-pretty',
                options: {
                    translateTime: 'HH:MM:ss Z',
                    ignore: 'pid,hostname'
                }
            }
        }
    });

    await fastify.register(productsRoutes, { prefix: '/products' });

    return fastify;
}

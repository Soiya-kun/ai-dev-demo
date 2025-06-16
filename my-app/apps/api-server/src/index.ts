import Fastify from 'fastify';
import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from '../../../packages/trpc-config/src/router';

const server = Fastify({ logger: true });

server.register(cors);
server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter },
});

server.get('/', async () => {
  return { status: 'ok' };
});

server.listen({ port: 4000, host: '0.0.0.0' }).catch((err) => {
  server.log.error(err);
  process.exit(1);
});

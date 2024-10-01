import fastify from 'fastify';
import { ZodError } from 'zod';
import { routes } from './http/routes';

export const app = fastify();

app.register(routes)

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
      reply.status(400).send({message: 'Validation error.', issues: error.format()})
  }

  return reply.status(500).send({message: 'Internal server error.'})
})
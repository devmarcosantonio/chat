import fastify from 'fastify';

export const app = fastify();

// Rota de teste
app.get('/', async (request, reply) => {
  return { message: 'Bem-vindo ao Chat!' };
});



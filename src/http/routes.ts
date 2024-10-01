import { FastifyInstance } from "fastify";
import userController from './controllers/user-controller'



export async function routes(fastify: FastifyInstance) {
    // Rotas de Usuários
    fastify.get('/api/users/', userController.getAll); // Criar uma nova conta
    fastify.post('/api/users/register', userController.register); // Criar uma nova conta

  }
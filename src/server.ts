import { app } from './app'

const start = async () => {
    try {
      await app.listen({
        host: '0.0.0.0',
        port: 3000
      });
      console.log('Servidor rodando em http://localhost:3000');
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  };
  
  start();
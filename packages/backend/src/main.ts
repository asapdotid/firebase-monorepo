import { app } from './server';

(async () => {
  const server = await app();
  await server.listen(3000);
})();

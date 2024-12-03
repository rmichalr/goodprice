import { app } from './main';

describe('Backend App', () => {
  let server;

  afterEach(async () => {
    if (server) {
      await server.close();
    }
  });

  it('should start the server', async () => {
    server = await app.listen(4000);
    expect(server.address()).toBeDefined();
  });
});
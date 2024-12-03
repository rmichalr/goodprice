import { app } from './main';

describe('Backend App', () => {
  it('should start the server', async () => {
    const server = await app.listen(3000);
    expect(server.address()).toBeDefined();
  });
});

require('dotenv').config();
const Hapi = require('hapi');

const routes = require('./../src/core/routes');
const { knex: conn, config } = require('./../src/core/database');

this.tmp = {};

describe('Start Test', () => {
  before(async () => {
    // Create a server with a host and port
    const server = Hapi.server({
      host: 'localhost',
      port: 8080,
      routes: { cors: { origin: ['*'] } },
    });

    server.route(routes);
    async function start() {
      try {
        await server.start();
      } catch (err) {
        console.log(err);
        process.exit(1);
      }
      console.log('Server running at:', server.info.uri);
    }

    start();
  });

  it('TEST INTEGRATION', () => {
    require('./integrations/index.spec');
  });
});

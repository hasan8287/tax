require('dotenv').config();
const Hapi = require('hapi');

const { routes } = require('./src/core');
const { knex: conn, config } = require('./src/core/database');

// Create a server with a host and port
const server = Hapi.server({
  host: process.env.HOST,
  port: process.env.PORT,
  routes: { cors: { origin: ['*'] } },
});

server.route(routes);

// Start the server
async function start() {
  try {
    // if database failde create fron docker
    // eslint-disable-next-line consistent-return
    await conn.raw('select 1+1 as result').catch(async (err) => {
      if (err.code === 'ER_BAD_DB_ERROR') {
        delete config.database;
        let knex = require('knex')({
          client: 'mysql',
          connection: config,
        });

        await knex.raw(`CREATE DATABASE ${process.env.DATABASE_MYSQL}`);
        config.database = process.env.DATABASE_MYSQL;
        knex = require('knex')({
          client: 'mysql',
          connection: config,
        });
        return knex.migrate.latest();
      }
    });
    await server.start();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
  }
  // eslint-disable-next-line no-console
  console.log('Server running at:', server.info.uri);
}

start();

const bookshelf = require('bookshelf');

let config = {
  host: process.env.HOST_MYSQL,
  port: process.env.PORT_MYSQL,
  user: process.env.USERNAME_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  database: process.env.DATABASE_MYSQL,
};

if (process.env.NODE_ENV === 'test') {
  config = {
    host: process.env.HOST_MYSQL_TEST,
    port: process.env.PORT_MYSQL_TEST,
    user: process.env.USERNAME_MYSQL_TEST,
    password: process.env.PASSWORD_MYSQL_TEST,
    database: process.env.DATABASE_MYSQL_TEST,
  };
}

const knex = require('knex')({
  client: 'mysql',
  connection: config,
});

function connect() {
  return bookshelf(knex);
}

const db = connect();
db.plugin('pagination');
db.plugin('registry');

module.exports = { db, knex, config };

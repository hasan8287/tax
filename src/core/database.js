const bookshelf = require('bookshelf');
const mockDb = require('mock-knex');
const knex = require('knex');

// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'tax',
//   },
// });

const dbku = knex({
  client: 'mysql',
});

function connect() {
  return bookshelf(mockDb.mock(dbku));
}

const db = connect();
db.plugin('pagination');
db.plugin('registry');

module.exports = db;

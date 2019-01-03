
require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.HOST_MYSQL,
      port: process.env.PORT_MYSQL,
      user: process.env.USERNAME_MYSQL,
      password: process.env.PASSWORD_MYSQL,
      database: process.env.DATABASE_MYSQL,
    },
  },

};

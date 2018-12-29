
require('dotenv').config();
const Hapi = require('hapi');
const { expect } = require('chai');
const sinon = require('sinon');
const mockMysql = sinon.mock(require('mysql'));

this.tmp = {};

describe('Database Write Requests', () => {
  it('connect db', () => {
    mockMysql.expects('createConnection').returns({
      connect: () => {
        console.log('Succesfully connected');
      },
      query: (query, vars, callback) => {
        callback(null, succesfulDbInsert);
      },
      end: () => {
        console.log('Connection ended');
      }
    });
  });
});


// describe('START TEST', () => {
//   before(async () => {
//     const server=Hapi.server({
//       host: process.env.HOST,
//       port: process.env.PORT,
//     });

//     const mongod = new MongoMemoryServer();
//     const uri = await mongod.getConnectionString();

//     this.tmp.conn = await mongoose.connect(uri);

//     this.tmp.start = async function start() {
//       try {
//         await server.start();
//       } catch (err) {
//         return (err);
//       }
//       return server.info.uri;
//     };
//   })

//   it('server', async () => {
//     const start = await this.tmp.start();
//     expect(start).to.be.an('string');
//   })

//   it('integrations', async () => {
    
//   })

//   after(() => {

//   });
// })

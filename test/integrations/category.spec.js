const chai = require('chai');
const http = require('chai-http');

chai.use(http);
this.tmp = {};

before(() => {
  this.integration = require('./index.spec');
});

it('should success create category tax', async () => {
  const action = await chai.request(this.integration.baseUrl)
    .post('category')
    .send({
      name: 'test-01',
      value: 1,
      refundable: 'YES',
    });

  chai.expect(action).to.be.an('object').that.haveOwnProperty('status');
  chai.expect(action.status).to.be.equal(201);
  this.tmp.createData = action.body.data;
});

it('should success delete data caegory tax', async () => {
  const action = await chai.request(this.integration.baseUrl)
    .delete(`category/${this.tmp.createData.category_id}`);

  chai.expect(action).to.be.an('object').that.haveOwnProperty('status');
  chai.expect(action.status).to.be.equal(200);
  chai.expect(parseInt(action.body.data.category_id, 10))
    .to.be.equal(parseInt(this.tmp.createData.category_id, 10));
});

it('should success get data', async () => {
  await chai.request(this.integration.baseUrl)
    .post('category')
    .send({
      name: 'test-02',
      value: 1,
      refundable: 'YES',
    });

  const action = await chai.request(this.integration.baseUrl)
    .get('category');

  chai.expect(action).to.be.an('object').that.haveOwnProperty('status');
  chai.expect(action.status).to.be.equal(200);
  this.tmp.data = action.body.data;
});

after(() => {
  module.exports = this.tmp;
});

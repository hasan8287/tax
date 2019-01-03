const chai = require('chai');
const http = require('chai-http');

chai.use(http);
this.tmp = {};

before(() => {
  this.integration = require('./index.spec');
});

it('should success create tax', async () => {
  const action = await chai.request(this.integration.baseUrl)
    .post('tax')
    .send({
      category_id: 1,
      tax_name: 'test-01',
      tax_price: 10000,
    });

  chai.expect(action).to.be.an('object').that.haveOwnProperty('status');
  chai.expect(action.status).to.be.equal(201);
  this.tmp.createData = action.body.data;
});

it('should success delete data tax', async () => {
  const action = await chai.request(this.integration.baseUrl)
    .delete(`tax/${this.tmp.createData.tax_id}`);

  chai.expect(action).to.be.an('object').that.haveOwnProperty('status');
  chai.expect(action.status).to.be.equal(200);
  chai.expect(parseInt(action.body.data.tax_id, 10))
    .to.be.equal(parseInt(this.tmp.createData.tax_id, 10));
});


it('should success get data', async () => {
  const action = await chai.request(this.integration.baseUrl)
    .get('tax');

  chai.expect(action).to.be.an('object').that.haveOwnProperty('status');
  chai.expect(action.status).to.be.equal(200);
  this.tmp.data = action.body.data;
});

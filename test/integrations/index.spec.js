

const baseUrl = 'localhost:8080/';

this.integration = {
  baseUrl,
};


describe('Categrory Tax Module', () => {
  before(() => {
    module.exports = this.integration;
  });

  require('./category.spec');

  after(() => {
    this.integration.category = require('./category.spec');
  });
});

describe('Tax Module', () => {
  before(() => {
    module.exports = this.integration;
  });

  require('./tax.spec');
});

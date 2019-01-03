const { routes: category } = require('./../category');
const { routes: tax } = require('./../tax');

module.exports = [].concat(category, tax);

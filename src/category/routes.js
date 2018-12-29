
const controller = require('./controller');

module.exports = [
  /**
   * routes get data category tax
   */
  {
    method: 'GET',
    path: '/category',
    handler: controller.getData,
  },

  /**
   * craate data category
   */
  {
    method: 'POST',
    path: '/category',
    handler: controller.createData,
  },
];

const controller = require('./controller');

module.exports = [
  // create data tax
  {
    method: 'POST',
    path: '/tax',
    handler: controller.createData,
  },

  // get data tax
  {
    method: 'GET',
    path: '/tax',
    handler: controller.getData,
  },

  /**
   * delete tax by id
   */
  {
    method: 'DELETE',
    path: '/tax/{id}',
    handler: controller.deleteData,
  },
];

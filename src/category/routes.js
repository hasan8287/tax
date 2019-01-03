
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

  /**
   * delete category tax by id
   */
  {
    method: 'DELETE',
    path: '/category/{id}',
    handler: controller.deleteData,
  },
];

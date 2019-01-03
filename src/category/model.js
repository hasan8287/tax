const { db: database } = require('./../core/database');

const { ModelTax } = require('./../tax');


class CategoryModel extends database.Model {
  // eslint-disable-next-line class-methods-use-this
  get tableName() {
    return 'category';
  }

  get tax() {
    return this.hasMany(new ModelTax());
  }

  // eslint-disable-next-line class-methods-use-this
  get idAttribute() {
    return 'category_id';
  }

  /**
   * get all data category
   * @param{{page: int, limit: int}}
   */
  getCategoryWithPagination(param) {
    return this.orderBy('name').fetchPage({
      pageSize: parseInt(param.limit, 10),
      page: parseInt(param.page, 10),
    });
  }

  /**
   * insert data category tax
   * @param{Object}
   */
  insertNewCategory(data) {
    return this.save(data);
  }

  /**
   * delete data by id
   * @param {int} category_id
   */
  static deleteData(id) {
    return new CategoryModel({ category_id: id }).destroy();
  }
}

module.exports = CategoryModel;

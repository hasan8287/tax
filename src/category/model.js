const database = require('./../core/database');


class CategoryModel extends database.Model {
  // eslint-disable-next-line class-methods-use-this
  get tableName() {
    return 'category';
  }

  // eslint-disable-next-line class-methods-use-this
  get idAttribute() {
    return 'category_id';
  }

  getCategoryWithPagination() {
    return this.orderBy('name').fetchPage({
      pageSize: 10,
      page: 1,
    });
  }

  insertNewCategory(data) {
    return this.save(data);
  }
}

module.exports = CategoryModel;

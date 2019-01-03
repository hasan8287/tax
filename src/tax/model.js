const { db: database } = require('./../core/database');

class TaxModel extends database.Model {
  // eslint-disable-next-line class-methods-use-this
  get tableName() {
    return 'tax';
  }

  // eslint-disable-next-line class-methods-use-this
  get idAttribute() {
    return 'tax_id';
  }

  /**
   * get data tax
   * @param {object: {page: int, limit: int}}
   */
  getCategoryWithPagination(param) {
    return this.query((qb) => {
      qb.join('category', 'category.category_id', 'tax.category_id');
      qb.select('tax_id', 'tax_name', 'tax_price',
        'category.name', 'category.value', 'category.refundable');
      return qb;
    }).fetchPage({
      pageSize: parseInt(param.limit, 10),
      page: parseInt(param.page, 10),
    });
  }

  /**
   * insert data tax
   * @param{Object}
   */
  insertNewTax(data) {
    return this.save(data);
  }

  /**
   * delete data by id
   * @param {int} tax_id
   */
  static deleteData(id) {
    return new TaxModel({ tax_id: id }).destroy();
  }
}

module.exports = TaxModel;

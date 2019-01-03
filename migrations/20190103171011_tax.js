

// eslint-disable-next-line func-names
exports.up = function (knex) {
  return knex.schema.createTable('tax', (table) => {
    table.increments('tax_id').primary();
    table.integer('category_id', 11);
    table.string('tax_name', 200);
    table.float('tax_price');
  });
};

// eslint-disable-next-line func-names
exports.down = function (knex) {
  return knex.schema.dropTable('tax');
};



// eslint-disable-next-line func-names
exports.up = function (knex) {
  return knex.schema.createTable('category', (table) => {
    table.increments('category_id').primary();
    table.string('name', 200);
    table.float('value');
    table.enu('refundable', ['NO', 'YES']);
  });
};

// eslint-disable-next-line func-names
exports.down = function (knex) {
  return knex.schema.dropTable('category');
};


exports.up = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.string('company').alter();
    })
    .createTable('companies', function (table) {
      table.increments('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.string('company', 29).alter();
    })
    .dropTable('companies')
};

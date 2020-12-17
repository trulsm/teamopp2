
exports.up = function(knex) {
  return knex.schema
    .createTable('user', function (table) {
      table.increments('id');
    })
    .createTable('job', function (table) {
      table.increments('id');
    })
    .createTable('jobOffer', function (table) {
      table.increments('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user')
    .dropTable('job')
    .dropTable('jobOffer')
};

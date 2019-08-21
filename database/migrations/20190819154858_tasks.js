exports.up = function(knex) {
  return knex.schema.createTable('tasks', function(table) {
    table.increments('id');
    table.integer('user_id');
    table.string('details', 255).notNullable();
    table.boolean('is_completed');
    table.datetime('reminder');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};

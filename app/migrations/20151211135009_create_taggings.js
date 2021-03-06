exports.up = function(knex, Promise) {
  return knex.schema.createTable('taggings', function(table){
    table.increments();
    table.integer('tag_id').unsigned().index().references('tags.id').onDelete('cascade');
    table.integer('post_id').unsigned().index().references('posts.id').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('taggings')
};

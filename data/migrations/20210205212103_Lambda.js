exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments("project_id");
  });
};

exports.down = function (knex) {};

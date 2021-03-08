exports.seed = async function(knex) {
  await knex("tasks").truncate()

  await knex("tasks").insert([
      { task_description: "sprint2", task_notes: "pass or stay in same unit", task_completed: true, project_id: 1},
      { task_description: "test", task_notes: "test note", task_completed: true, project_id: 2},
   ])
};
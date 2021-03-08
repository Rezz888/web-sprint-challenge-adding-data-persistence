// build your `Task` model here
const db = require('../../data/dbConfig');

function find() {
    return db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select("t.task_id",
     "t.task_description", 
     "t.task_notes", 
     "t.task_completed", 
     "p.project_name",
     "p.project_description")
}

function add(task) {
    return db.insert({
        task_description: task.task_description,
        task_notes: task.task_notes,
        project_id: task.project_id
      })
}

module.exports = {
    find,
    add,
}
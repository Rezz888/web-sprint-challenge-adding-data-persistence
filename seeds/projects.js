
exports.seed = async function(knex) {
   await knex("projects").truncate()

   await knex("projects").insert([
       { project_name: "sprint2", project_description: "pass or stay in same unit"},
       { project_name: "amazon arbitrage", project_description: "passive income"},
    ])
};

exports.seed = async function(knex) {
  await knex("resources").truncate()

  await knex("resources").insert([
      { resource_name: "sprint2", resource_description: "pass or stay in same unit"},
      { resource_name: "amazon arbitrage", resource_description: "passive income"},
   ])
};
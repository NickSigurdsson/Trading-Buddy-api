/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('portfolio').del()
  await knex('portfolio').insert([
    {
      id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
      ticker: 'AAPL',
    },
    {
      id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
      ticker: 'MSFT',
    },
  ]);
};

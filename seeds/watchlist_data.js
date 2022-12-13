/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('watchlist').del()
  await knex('watchlist').insert([
    {
      id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25h4b7',
      ticker: 'AALI',
    },
    {
      id: 'bb1491eb-30e6-4728-a5fa-72f89feas622',
      ticker: 'BBCA',
    },
  ]);
};

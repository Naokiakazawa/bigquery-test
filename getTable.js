'use strict';

function main(datasetId = 'import') {
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();
  require('dotenv').config();

  async function listTables() {
    const [tables] = await bigquery.dataset(datasetId).getTables();
    console.log('Tables:');
    tables.forEach(table => console.log(table.id));
  }
  listTables();
}
main(...process.argv.slice(2));
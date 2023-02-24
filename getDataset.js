'use strict';

function main() {
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();
  require('dotenv').config();

  async function listDatasets() {
    const [datasets] = await bigquery.getDatasets();
    console.log('Datasets:');
    datasets.forEach(dataset => console.log(dataset.id));
  }
  listDatasets();
}
main(...process.argv.slice(2));
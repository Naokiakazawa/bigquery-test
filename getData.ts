import {BigQuery} from "@google-cloud/bigquery";

const bigquery = new BigQuery({
  credentials: require('../secrets.json'),
})

const query: string = `
  select * from appleMusic_Content_20220831
`

const options = {
  query,
  useLegacySql: false,
  dryRun: true
}

async function getList(){
  const query: string = `
    select * from appleMusic_Content_20220831
    `

  const options = {
    query,
    useLegacySql: false,
    dryRun: true
  }

  const [job] = await bigquery.createQueryJob(options);

  console.log('Status:');
  console.log(job.metadata.status);
  console.log('\nJob Statistics:');
  console.log(job.metadata.statistics);
}

getList();

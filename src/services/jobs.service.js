const { jobs } = require ('../data/jobs');

function listJobsService(){
    return jobs;
} 

module.exports = {
    listJobsService
};
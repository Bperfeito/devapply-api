const { jobs } = require('../data/jobs');

function findjobById(id){
    return jobs.find((job)=> job.id === id);
}

module.exports = findjobById;
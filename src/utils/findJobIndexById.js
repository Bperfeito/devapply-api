const { jobs} = require('../data/jobs');

function findJobIndexById(id){
    return jobs.findIndex((job) => job.id === id);
}

module.exports = findJobIndexById;

const { jobs } = require ('../data/jobs');
const findJobById = require('../utils/findJobById');

function listJobsService(){
    return jobs;
} 

function createJobService({company, role, status}){
    const job = {
        id: jobs.length +1, 
        company, 
        role,
        status
    }
    jobs.push(job);
    
    return job;
}

function getJobByIdService(id) {
    return findJobById(id);
}

module.exports = {
    listJobsService,
    createJobService,
    getJobByIdService
};
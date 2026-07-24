const { jobs } = require ('../data/jobs');
const findJobById = require('../utils/findJobById');

const findJobIndexById = require('../utils/findJobIndexById');

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

function updateJobService(id, {company, role, status}){
    const job = findJobById(id);

    if(!job){
        return null;
    }
     if(company){
        job.company = company;
     }

     if(role){
        job.role = role;
     }

     if(status){
        job.status = status;
     }

     return job;
}

function deleteJobService(id) {
    const jobIndex = findJobIndexById(id)

    if(jobIndex === -1){
        return false;
    }

    jobs.splice(jobIndex, 1);

    return true;
}

module.exports = {
    listJobsService,
    createJobService,
    getJobByIdService,
    updateJobService,
    deleteJobService
};
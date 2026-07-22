const { jobs } = require ('../data/jobs');

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

module.exports = {
    listJobsService,
    createJobService
};
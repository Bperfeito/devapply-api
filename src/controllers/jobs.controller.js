const { jobs, allowedStatuses} = require('../data/jobs');
const isValidStatus = require('../utils/validateStatus');

function listJobs(req, res){
    return res.status(200).json(jobs);
}

function createJob (req, res){
    const { company, role, status} = req.body || {};

    if(!company){
        return res.status(400).json({
            message: 'Company is required'
        });
    }

    if(!role){
        return res.status(400).json({
            message: 'Role is required'
        });
    }

    if(!status){
        return res.status(400).json({
            message: 'Status is required'
        });
    }

    if(!isValidStatus(status)){
        return res.status(400).json({
            message: 'Invalid status'
        });
    }

    const job = {
        id: jobs.length +1, company, role, status
    };

    jobs.push(job);

    return res.status(201).json(job);
}

function getJobById(req, res){
    const id = Number(req.params.id);

    const job = jobs.find((job)=> job.id === id);

    if(!job){
        return res.status(404).json({
            message:' Job not found'
        });
    }
    return res.status(200).json(job);
}

function updateJob(req, res){
    const id = Number(req.params.id);

    const job = jobs.find((job)=> job.id === id);

    if(!job){
        return res.status(404).json({
            message: 'Job is not found'
        })
    }

    const { company, role, status} = req.body || {};

    if(!company && !role && !status){
        return res.status(400).json({
            message: 'At least one field must be provieded'
        });
    }

    if(status && !isValidStatus(status)){
        return res.status(400).json({
            message: 'Invalid status'
        });
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

    return res.status(200).json(job);

}

function deleteJob (req, res){
    const id = Number(req.params.id);

    const jobIndex = jobs.findIndex((job)=> job.id === id);

    if(jobIndex === -1){
        return res.status(404).json({
            message: 'Job not found'
        });
    }

    jobs.splice(jobIndex, 1);

    return res.status(204).send();
}

module.exports = {
    listJobs,
    createJob,
    getJobById,
    updateJob,
    deleteJob
};

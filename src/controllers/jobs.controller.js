const isValidStatus = require('../utils/validateStatus');

const {listJobsService, createJobService, getJobByIdService, updateJobService, deleteJobService} = require('../services/jobs.service');

const messages = require('../constants/messages');

function listJobs(req, res){
    const jobs = listJobsService();

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

    const job = createJobService({
        company,
        role,
        status});

    return res.status(201).json(job);
}

function getJobById(req, res){
    const id = Number(req.params.id);

    const job = getJobByIdService(id);

    if(!job){
        return res.status(404).json({
            message: messages.jobNotFound
        });
    }
    return res.status(200).json(job);
}

function updateJob(req, res){
    const id = Number(req.params.id);

    const job = getJobByIdService(id);

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

    const updateJob = updateJobService(id, {company, role, status});

    return res.status(200).json(job);

}

function deleteJob (req, res){
    const id = Number(req.params.id);

    const deleted = deleteJobService(id);

    if(!deleted){
        return res.status(404).json({
            message: messages.jobNotFound
        });
    }

    return res.status(204).send();
}

module.exports = {
    listJobs,
    createJob,
    getJobById,
    updateJob,
    deleteJob
};

const isValidStatus = require('../utils/validateStatus');

const {listJobsService, createJobService, getJobByIdService, updateJobService, deleteJobService} = require('../services/jobs.service');

const messages = require('../constants/messages');
const AppError = require('../errors/AppError');

function listJobs(req, res){
    const jobs = listJobsService();

    return res.status(200).json(jobs);
}

function createJob (req, res, next){
    const { company, role, status} = req.body || {};

    if(!company){
        return next(new AppError(messages.companyRequired, 400));
    }

    if(!role){
        return next(new AppError(messages.roleRequired, 400));
    }

    if(!status){
        return next(new AppError(messages.statusRequired, 400));
    }

    if(!isValidStatus(status)){
        return next(new AppError(messages.invalidStatus, 400));
    }

    const job = createJobService({
        company,
        role,
        status});

    return res.status(201).json(job);
}

function getJobById(req, res, next){
    const id = Number(req.params.id);

    const job = getJobByIdService(id);

    if(!job){
        return next(new AppError(messages.jobNotFound, 404));
    }
 
    return res.status(200).json(job);
}


function updateJob(req, res, next){
    const id = Number(req.params.id);

    const job = getJobByIdService(id);

    if(!job) {
        return next(new AppError(messages.jobNotFound, 404));
    }

    const { company, role, status} = req.body || {};

    if(!company && !role && !status){
        return next(new AppError(messages.atLeastOneFieldRequired, 400));
    }

    if(status && !isValidStatus(status)){
        return next(new AppError(messages.invalidStatus, 400));
        };

    const updateJob = updateJobService(id, {company, role, status});

    return res.status(200).json(job);
    }

    


function deleteJob (req, res, next){
    const id = Number(req.params.id);

    const deleted = deleteJobService(id);

    if(!deleted){
        return next(new AppError(messages.jobNotFound, 404));
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

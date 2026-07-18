const express = require('express');
const {jobs, allowedStatuses} = require('../data/jobs');

const jobsRoutes = express.Router();

jobsRoutes.get('/', (req, res)=> {
    return res.status(200).json(jobs);
})

jobsRoutes.post('/', (req, res)=> {
    const { company, role, status } = req.body || {};

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

    if(!allowedStatuses.includes(status)){
        return res.status(400).json({
            message: 'Invalid status'
        });
    }

    const job = {
        id: jobs.length +1,
        company,
        role,
        status
    };

    jobs.push(job);

    res.status(201).json(job);
});

jobsRoutes.get('/:id', (req, res)=> {
    const id = Number(req.params.id);

    const job = jobs.find((job)=> job.id === id);

    if(!job){
        return res.status(404).json({
            message: 'Job not found'
        })
    }

    return res.status(200).json(job);
});


jobsRoutes.patch('/:id', (req, res)=> {
    const id = Number(req.params.id);
    const job = jobs.find((job)=> job.id === id);

    if(!job){
        return res.status(404).json({
            message: "Job not found"
        });
    }

    const {company, role, status} = req.body || {};

    if(!company && !role && !status){
        return res.status(400).json({
            message: 'At least one field must be provided'
        });
    }

    if(status && !allowedStatuses.includes(status)){
        return res.status(400).json({
            message: 'Invalid status'
        });
    }

    if(company){
        job.company = company;
    }

    if(role){
        job.role = rolem;
    }

    if(status){
        job.status = status;
    }

    return res.status(200).json(job);
});


jobsRoutes.delete('/:id', (req, res)=> {
    const id = Number(req.params.id);

    const jobIndex = jobs.findIndex((job)=> job.id === id);

    if(jobIndex === -1){
        return res.status(404).json({
            message: 'Job not found'
        });
    }

    jobs.splice(jobIndex, 1);

    return res.status(204).send();
});


module.exports = jobsRoutes;
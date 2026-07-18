const express = require('express');


const { listJobs,
     createJob,
      getJobById,
       updateJob,
        deleteJob
    } = require('../controllers/jobs.controller');

const jobsRoutes = express.Router();

jobsRoutes.get('/', listJobs);
jobsRoutes.post('/', createJob);
jobsRoutes.get('/:id', getJobById);
jobsRoutes.patch('/:id', updateJob);
jobsRoutes.delete('/:id',deleteJob);

module.exports = jobsRoutes;
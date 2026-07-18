const express = require ('express');
const jobsRoutes = require('./routes/jobs.routes');

const app = express();

app.use(express.json());

app.get('/health', (req, res)=> {
    return res.status(200).json({
        status: 'OK',
        message:'DevApply API is running'
    });
});

app.use('/jobs', jobsRoutes);

module.exports = app;

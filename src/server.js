const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const jobs = [
    {
        id: 1,
        company: 'Itaú',
        role: 'Desenvolvedor Backend Junior',
        status: 'Saved'
    }
];

const allowedStatuses = [
    'saved',
    'applied',
    'interview',
    'test',
    'rejected',
    'approved'
];

app.get('/jobs', (req, res)=> {
    res.status(200).json(jobs);
})

app.post('/jobs', (req, res)=> {
    const { company, role, status } = req.body;

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

app.get('/jobs/:id', (req, res)=> {
    const id = Number(req.params.id);

    const job = jobs.find((job)=> job.id === id);

    if(!job){
        return res.status(404).json({
            message: 'Job not found'
        })
    }

    return res.status(200).json(job);
});

app.patch('/jobs/:id', (req, res)=> {
    const id = Number(req.params.id);
    const job = jobs.find((job)=> job.id === id);

    if(!job){
        return res.status(404).json({
            message: "Job not found"
        });
    }

    const {company, role, status} = req.body;
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

app.delete('/jobs/:id', (req, res)=> {
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


app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'DevApply API is running'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


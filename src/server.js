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

app.get('/jobs', (req, res)=> {
    res.status(200).json(jobs);
})

app.post('/jobs', (req, res)=> {
    const { company, role, status } = req.body;
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


app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'DevApply API is running'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


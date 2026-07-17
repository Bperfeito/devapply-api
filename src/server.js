const express = require('express');
const app = express();
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


app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'DevApply API is running'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


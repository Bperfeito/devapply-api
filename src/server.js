const express = require('express');
const jobsRoutes = require('./routes/jobs.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'DevApply API is running'
    });
});

app.use('/jobs', jobsRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


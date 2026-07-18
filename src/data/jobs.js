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

module.exports = {
    jobs,
    allowedStatuses
};
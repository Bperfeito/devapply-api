const {allowedStatuses} = require('../data/jobs');

function isValidStatus(status){
    return allowedStatuses.includes(status);
}

module.exports = isValidStatus;
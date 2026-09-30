const menssages = require('../constants/messages');

function errorHandler(err, req, res, next) {
    console.log(err);

    return res.status(500).json({
        message: messages.internalServerError
    });
};

module.exports = errorHandler;
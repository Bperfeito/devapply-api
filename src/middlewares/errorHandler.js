
const AppError = require('../errors/AppError');
const messages = require('../constants/messages');


function errorHandler(err, req, res, next) {
    console.log(err);
    
    if(err instanceof AppError) {
    return res.status(err.statusCode).json({
        message: err.message
        })
    }   

    return res.status(500).json({
        message: messages.internalServerError
    });
};

module.exports = errorHandler;
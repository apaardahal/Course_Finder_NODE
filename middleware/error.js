const errorResponse = require("../utils/errrorResponse");

const errorHandler = (err, req, res, next) => {

    let error = {...err }

    err.message = err.message;


    // Monogose bad ObjectId
    if (err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`;
        error = new errorResponse(message, 404);
    }

    // Mongoose duplicate key errors
    if (err.code === 11000) {
        const message = `Duplicate field value entered`;
        error = new errorResponse(message, 400);

    }

    // Mongoose validation errors
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new errorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
}

module.exports = errorHandler;
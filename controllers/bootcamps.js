const Bootcamp = require('../models/Bootcamp');
const errorResponse = require('../utils/errrorResponse');
const asyncHandler = require('../middleware/async');
// @description     Get all bootcamps
// @Route           GET /api/v1/bootcamps
// @access          Public
exports.getBootcamps = asyncHandler(async(req, res, next) => {

    const bootcamps = await Bootcamp.find();

    res.status(200).json({
        status: true,
        count: bootcamps.length,
        data: bootcamps
    })
})

// @description     Get single bootcamps
// @Route           GET /api/v1/bootcamps/:id
// @access          Public
exports.getBootcamp = asyncHandler(async(req, res, next) => {

    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
        return next(new errorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: bootcamp
    })

})

// @description     Create a new bootcamp
// @Route           POST /api/v1/bootcamps
// @access          Private
exports.createBootcamp = asyncHandler(async(req, res, next) => {

    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true,
        data: bootcamp
    })

})

// @description     Update bootcamp
// @Route           PUT /api/v1/bootcamps/:id
// @access          Private
exports.updateBootcamp = asyncHandler(async(req, res, next) => {

    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!bootcamp) {
        return next(new errorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: bootcamp
    })

})

// @description     Delete bootcamp
// @Route           DELETE /api/v1/bootcamps/:id
// @access          Private
exports.deleteBootcamp = asyncHandler(async(req, res, next) => {

    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
        return next(new errorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: {}
    })
})
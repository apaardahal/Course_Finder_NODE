const Course = require('../models/Course');
const errorResponse = require('../utils/errrorResponse');
const asyncHandler = require('../middleware/async');

// @description     Get Courses 
// @Route           GET /api/v1/courses
// @Route           GET /api/v1/bootcamps/:bootcampId/courses
// @access          Public
exports.getCourses = asyncHandler(async(req, res, next) => {
    let query;

    if (req.params.bootcampId) {
        query = Course.find({ bootcamp: req.params.bootcampId });
    } else {
        query = Course.find().populate({
            path: 'bootcamp',
            select: 'name description'
        });
    }

    const courses = await query;

    res.status(200).json(({
        success: true,
        count: courses.length,
        data: courses
    }))
});
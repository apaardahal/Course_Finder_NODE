// @description     Get all bootcamps
// @Route           GET /api/v1/bootcamps
// @access          Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        status: true,
        msg: 'All bootcamps'
    })
}

// @description     Get single bootcamps
// @Route           GET /api/v1/bootcamps/:id
// @access          Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        status: true,
        msg: 'Single bootcamps'
    })
}

// @description     Create bootcamps
// @Route           POST /api/v1/bootcamps
// @access          Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        status: true,
        msg: 'Create bootcamp'
    })
}

// @description     Update bootcamp
// @Route           PUT /api/v1/bootcamps/:id
// @access          Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        status: true,
        msg: 'Update bootcamp'
    })
}

// @description     Delete bootcamp
// @Route           DELETE /api/v1/bootcamps/:id
// @access          Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        status: true,
        msg: 'Delete bootcamp'
    })
}
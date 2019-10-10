module.exports =
    (err, req, res, next) => {
        const statusCode = err.status || 500
        const errorMessage = err.msg || 'Internal Server Error'
        if (err.name === 'ValidationError') {
            res.status(400).json({ msg: err.message })
        }
        res.status(statusCode).json({msg: errorMessage})
    }
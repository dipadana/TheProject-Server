const File = require('../models/file')

class fileController {
    static findAll (req, res, next) {
        File.find().exec()
        let filesData = []
        .then(files => {
            files.forEach(file => {
                const { url, user_id, rating } = file
                let averageRating = null
                rating.forEach(number => {
                    averageRating += number
                })
                averageRating = averageRating / rating.length
                filesData.push({ url, user_id, averageRating })
            })
            res.status(200).json(filesData)
        })
        .catch(next)
    }
    static create (req, res, next) {
        const { url, user_id } = req.body
        File.create({ url, user_id })
        .then(file => {
            res.status(200).json(file)
        })
        .catch(next({ msg: 'Failed To Create' }))
    }
}

module.exports = fileController
const mongoose = require('mongoose')

const forexsignalsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('forexsignals', forexsignalsSchema)
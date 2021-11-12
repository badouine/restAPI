const mongoose = require('mongoose');
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: Number
})

module.exports = { User }
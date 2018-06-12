var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }
});

module.exports = { User };

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    surname : String,
    username: String,
    password: String,
    dor: {type: Date, default: Date.now() }

});

mongoose.model('User', userSchema);

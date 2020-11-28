var mongoose = require('mongoose')
var UserSchema = mongoose.Schema({
    name: String,
    amount: String,
    operator: String,
    created_at: {
        type: String,
        default: Date
    }
});

exports = mongoose.model('user', UserSchema);
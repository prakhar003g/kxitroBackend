var mongoose = require('mongoose')
var CategorySchema = mongoose.Schema({
    name: String,
    created_at: {
        type: String,
        default: Date
    }
});

exports = mongoose.model('category', CategorySchema);
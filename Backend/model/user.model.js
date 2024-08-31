const mongoose = require('mongoose');
const books = require('./book.model');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
        
    },
    password: {
        type: String,
        required:true,
    },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'bookList' }],
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
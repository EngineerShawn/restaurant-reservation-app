const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    // Add other relevant fields
});

module.exports = mongoose.model('User', userSchema);￼Enter

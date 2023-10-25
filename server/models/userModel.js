const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true },
    phoneno: { type: Number, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model("user", userSchema);

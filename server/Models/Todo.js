const mongoose  = require('mongoose');


const Todo = new mongoose.Schema({
    title: {
        type: String,
        maxlength: [40, "Title cannot be more than 40 characters"],
        required: true,
        trim: true,

    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Todo", Todo);
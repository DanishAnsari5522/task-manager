const mongoose = require('mongoose');

const task = new mongoose.Schema({
    task_title: {
        type: String,
        require: true
    },
    current_time: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model("task", task)
const express = require('express')
const route = express.Router()
const { getAllTasks, createTask, getTask, uploadTask, deleteTask } = require("../controllers/tasks.controller")

// route.get('/getAllTasks',getAllTasks);
// route.post('/createTask',createTask);
// route.delete('/deleteTask',deleteTask);

route.route('/').get(getAllTasks).post(createTask)
route.route('/:id').get(getTask).patch(uploadTask).delete(deleteTask)

module.exports = route
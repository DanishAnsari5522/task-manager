const Task = require('../models/task.model')
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const createTask = async (req, res) => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let current_time = year + "-" + month + "-" + date;
    try {
        let { task_title } = req.body;
        if (!task_title) {
            return res.status(400).json({ success: false, message: " Task Reaquired" })
        } else {
            const task = await Task.create({ task_title, current_time })
            return res.status(400).json({ success: true, message: " Save sucseccfully" })
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(400).json({ success: false, message: "Incorrect id" })
        }
        res.send(task)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }

}

const uploadTask =async (req, res) => {
    try{
        const {id:taskID}=req.params;
        const task=await Task.findOneAndUpdate({_id:taskID},req.body)
        if(!task){
            return res.status(400).json({ success: false, message: "Incorrect id" })
        }
        res.status(200).json({task})
    }catch(error){
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }

}

const deleteTask =async (req, res) => {
  try{
    const {id:taskID}=req.params;
    const task=await Task.findOneAndDelete({_id:taskID})
    if(!task){
        return res.status(400).json({ success: false, message: "Incorrect id" })
    }
    res.status(200).json({task})

  }catch(error){
    console.log(error);
    return res.status(500).json({ success: false, message: "server error" })

  }

}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    uploadTask,
    deleteTask
}
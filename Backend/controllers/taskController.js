const mongoose = require("mongoose");
// const { default: mongoose } = require("mongoose");
const taskModel = require("../models/TaskModel");

// To create a Task - POST
const createTask = async (req, res) => {
    const { title, description } = req.body;

    try {
        const task = await taskModel.create({ title, description });
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

// To get all tasks
const getTasks = async (req, res) => {
    try {
        const task = await taskModel.find({});
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}


// To get only one tasks
const getSingleTask = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return req.status(404).json({ error: 'Task Not Found!' })
    }
    try {
        const singleTask = await taskModel.findById(id);
        res.status(200).json(singleTask);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

// To update a task - PATCH
const updateTask = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return req.status(404).json({ error: 'Task Not Updated!' })
    }

    try {
        const task = await taskModel.findByIdAndUpdate({
            _id: id
        },
            {
                ...req.body
            });
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

// To delete a task - DELETE
const deleteTask = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return req.status(404).json({ error: 'Task Not Deleted!' })
    }


    try {
        const task = await taskModel.findByIdAndDelete(id);
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }

}


module.exports = { createTask, getTasks, getSingleTask, updateTask, deleteTask };
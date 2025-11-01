const express = require('express');

const router = express.Router();

const { createTask, getTasks, getSingleTask, updateTask, deleteTask } = require("../controllers/taskController");

router.post("/", createTask); //add task
router.get("/", getTasks); // get all tasks
router.get("/:id", getSingleTask); // get single task
router.patch("/:id", updateTask); // update task
router.delete("/:id", deleteTask); // delete task

module.exports = router;
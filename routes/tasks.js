const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// This Route display all the tasks on the index.ejs page
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render("index", { tasks });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// New Task form
router.get("/new-task", (req, res) => {
  res.render("newTask");
});

// adding new task 
router.post("/add-task", async (req, res) => {
  try {
    const { taskDate, taskName } = req.body;
    const newTask = new Task({ name: taskName, date: taskDate });
    await newTask.save();
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Edit Task Form
router.get("/edit-task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render("editTask", { task });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

// Updating Task
router.put("/edit-task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { taskName: newTask, taskDate: newDate } = req.body;
    await Task.findByIdAndUpdate(id, { name: newTask, date: newDate }, { runValidators: true, new: true });
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

// Delete a task
router.delete("/delete-task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

module.exports = router;

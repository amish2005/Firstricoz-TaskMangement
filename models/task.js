const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
  });
  
  
  const Task = mongoose.model('Task', taskSchema);
  
  module.exports = Task;
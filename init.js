const mongoose = require("mongoose");
const task = require("./models/task.js");

main().then(() => {"Connection is Sucessful"})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taskManagement');

}

const tasks = [
    { name: "Complete project report", date: new Date("2024-10-10") },
    { name: "Meeting with team", date: new Date("2024-10-12") },
    { name: "Submit assignment", date: new Date("2024-10-07") },
    { name: "Buy groceries", date: new Date("2024-10-08") },
    { name: "Doctor's appointment", date: new Date("2024-10-15") },
    { name: "Call with client", date: new Date("2024-10-14") },
    { name: "Gym session", date: new Date("2024-10-06") },
    { name: "Plan weekend trip", date: new Date("2024-10-09") },
    { name: "Fix the bug in code", date: new Date("2024-10-11") },
    { name: "Family dinner", date: new Date("2024-10-13") }
  ];

task.insertMany(tasks);
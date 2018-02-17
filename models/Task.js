
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: { type: String},
  test: {type: String}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
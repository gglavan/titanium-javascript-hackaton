
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true},
  description: { type: String, required: true},
  test: {type: String, required: true},
  lessonId: {type: String, required: true}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
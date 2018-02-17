
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
<<<<<<< HEAD
  name: { type: String, unique: true, required: true},
  description: { type: String, required: true},
  test: {type: String, required: true},
=======
  name: { type: String, unique: true },
  description: { type: String},
  test: {type: String},
>>>>>>> origin/final
  lessonId: {type: String, required: true}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
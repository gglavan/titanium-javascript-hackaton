
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: { type: String},
  test: {type: String}
});

const Lesson = mongoose.model('Tasks', lessonSchema);

module.exports = Tasks;
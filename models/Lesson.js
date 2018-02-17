const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: { type: String}
});

module.exports = Lesson;
